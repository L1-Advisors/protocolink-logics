import { COMP } from './tokens';
import { CompoundLens__factory, Comptroller__factory } from './contracts';
import * as common from '@furucombo/composable-router-common';
import * as core from '@furucombo/composable-router-core';
import { getContractAddress } from './config';

export type ClaimLogicParams = core.ClaimParams;

export type ClaimLogicFields = core.ClaimFields;

@core.LogicDefinitionDecorator()
export class ClaimLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
  static readonly supportedChainIds = [common.ChainId.mainnet];

  getTokenList() {
    return [COMP];
  }

  async quote(params: ClaimLogicParams) {
    const metadata = await CompoundLens__factory.connect(
      getContractAddress('CompoundLens'),
      this.provider
    ).callStatic.getCompBalanceMetadataExt(COMP.address, getContractAddress('Comptroller'), params.owner);
    const output = new common.TokenAmount(COMP).setWei(metadata.allocated);

    return { output };
  }

  async build(fields: ClaimLogicFields) {
    const { owner } = fields;

    const to = getContractAddress('Comptroller');
    const data = Comptroller__factory.createInterface().encodeFunctionData('claimComp(address)', [owner]);

    return core.newLogic({ to, data });
  }
}