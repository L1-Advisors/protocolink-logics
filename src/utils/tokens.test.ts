import * as common from '@protocolink/common';
import { expect } from 'chai';
import { get1InchTokens, getGoerliTokens, getMetisTokens } from './tokens';

describe('Test tokens', function () {
  common.networks.forEach(({ chainId }) => {
    it(`network: ${common.toNetworkId(chainId)}`, async function () {
      const tokens =
        chainId === common.ChainId.metis
          ? await getMetisTokens()
          : chainId === common.ChainId.goerli
          ? getGoerliTokens()
          : await get1InchTokens(chainId);
      expect(tokens).to.have.lengthOf.above(0);
    });
  });
});
