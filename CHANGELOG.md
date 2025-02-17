# @protocolink/logics

## 1.0.11

### Patch Changes

- 82de208: fix compound v3 polygon market id

## 1.0.10

### Patch Changes

- 8d8fa5e: fix readme CI link
- c20e36d: fix init.ts rpc url
- f6d6c43: fix uniswap v3 slippage in e2e test
- a9de9d4: fix metis e2e and uniswapV3 e2e
- 582ad02: fix uniswap v3 swap token e2e
- ce90494: add Morphoblue markets

## 1.0.9

### Patch Changes

- 87a5374: reorganize ci
- e528032: change Radiant test from Arbitrum to Mainnet

## 1.0.8

### Patch Changes

- 6c64f91: fix Morphoblue repay tokenIn

## 1.0.7

### Patch Changes

- d8fa010: add Morpho Ethereum
- ba9bebd: exclude Morphoblue from flashloan aggregator when flashloan token length > 1

## 1.0.6

### Patch Changes

- d859f04: paraswap v5, openocean v2 add quote error

## 1.0.5

### Patch Changes

- 76a650b: add Morphoblue flashloan

## 1.0.4

### Patch Changes

- ffd0faa: support Morphoblue on Goerli

## 1.0.3

### Patch Changes

- 01bfa22: change repay tolerance of aave v2, aave v3, radiant v2 and spark
- 69aec6d: Updated dependencies
  - @protocolink/common@0.3.5
  - @protocolink/core@0.4.5
  - @protocolink/test-helpers@0.3.4

## 1.0.1

### Patch Changes

- 2185e54: Due to issues during webpack bundling, so removing the Core LogicDefinitionDecorator

## 1.0.0

### Major Changes

- release v1.0.0

## 0.4.8

### Patch Changes

- 035fa16: add Spark on Ethereum and Gnosis Chain
- 8a38ff6: add Gnosis Chain in AaveV3 and BalancerV2
- 3d09de4: add multichain to logics
- 530f3c4: add getTokenList in Permit2 pull token logic

## 0.4.7

### Patch Changes

- 0f96ade: feat: update callback addresses for production use
- 2fb70bf: Updated dependencies
  - @protocolink/common@0.3.4
  - @protocolink/core@0.4.3
- ec5cb39: fix: remove AAVE V2 stable rate tests
- 8cccf10: add Permit2 pull token logics

## 0.4.6

### Patch Changes

- 869759a: fix OpenOcean WETH chainId

## 0.4.5

### Patch Changes

- d016d8c: support OpenOceanV2 on Metis

## 0.4.4

### Patch Changes

- 7c2e0e8: remove UniswapV3 from Base and Avalanche
- 799723b: refine tokenTransferProxyAddress for ParaswapV5

## 0.4.3

### Patch Changes

- 4e11ee3: support Optimism, Base, Metis and Avalanche
- 975e860: refine compound v2 assets

## 0.4.2

### Patch Changes

- fa30983: compound v3 support arbitrum usdc and usdc.e market

## 0.4.1

### Patch Changes

- 3f0965f: add radiant v2 logics

## 0.4.0

### Minor Changes

- a9fbb7f: update for new router contract

### Patch Changes

- c2d146d: Support multi-chain e2e testing

## 0.3.1

### Patch Changes

- 5139efc: paraswap v5 logic add excludeDEXS param

## 0.3.0

### Minor Changes

- 150d405: update for new router contract

### Patch Changes

- 269bf7d: add how to contribute docs

## 0.2.16

### Patch Changes

- e43f7b4: refine compound v3 withdraw base logic
- e35c3ac: utility flash loan aggregator logic quote add quotation validation

## 0.2.15

### Patch Changes

- 8599925: fix the issue of paraswap v5 caused by missing token decimals

## 0.2.14

### Patch Changes

- 69568f8: update flash loan quote with repays

## 0.2.13

### Patch Changes

- 6ed8cef: Utility FlashLoanAggregatorLogic quote params add optional protocolId

## 0.2.12

### Patch Changes

- 6f5e0b8: Updated dependencies
  - @protocolink/core@0.2.18
- 46eb428: refine compound v3 repay logic balanceBps usage
- da8f0fc: aave v2 flash loan logic add quote func
- 05d29c9: aave v3 flash loan logic add quote func
- 5659236: Utility MultiSendLogic implement with core.LogicMultiBuilderInterface
- 874029a: balancer v2 flash loan logic add quote func
- 195b3a8: feat: utility add flash loan aggregator logic

## 0.2.11

### Patch Changes

- 5c5aea0: permit2 logic add avalanche, fantom, zksync addresses

## 0.2.10

### Patch Changes

- 637d849: paraswap v5 logic quotation support buy trade type

## 0.2.9

### Patch Changes

- aa27d39: update aave v3, balance v2 flash loan callback addresses

## 0.2.8

### Patch Changes

- 00318ad: Updated dependencies
  - @protocolink/common@0.2.15
  - @protocolink/core@0.2.13

## 0.2.7

### Patch Changes

- d385927: Updated dependencies
  - @protocolink/common@0.2.11
  - @protocolink/core@0.2.12

## 0.2.6

### Patch Changes

- 5784590: compound v3 logic add arbitrum config

## 0.2.5

### Patch Changes

- 4f702d6: Updated dependencies
  - @protocolink/core@0.2.11
- 04b67c6: update aave v3, balancer v2 FlashLoanCallback addresses

## 0.2.4

### Patch Changes

- 95cc28b: Updated dependencies and devDependencies
  - @protocolink/core@0.2.8
  - axios-retry@3.5.1
  - @protocolink/test-helpers@0.2.7
  - @typescript-eslint/eslint-plugin@5.61.0
  - @typescript-eslint/parser@5.61.0
  - eslint@8.44.0
  - sort-package-json@2.5.0
  - tsc-alias@1.8.7

## 0.2.3

### Patch Changes

- 7b603c8: cli add tokens cmd
- 5470af5: add compound v3 configs
- c91bfcd: add permit2 configs
- 9f3dce9: add paraswap v5 configs
- 1b45c56: add balancer v2 configs
- f1f9772: add aave v2 configs
- 979d518: add syncswap swap token logic
- 21efcd7: refactor syncswap swap token utils functions
- 45d8ce0: add compound v2 configs
- 7b7c9cd: syncswap swap token quote add reference url
- 4c3f86d: revert zksync e2e test
- 9b5c03f: Updated dependencies
  - @protocolink/common@0.2.8
- 7d2d843: utils add get1inchTokens
- 045ea68: add aave v3 configs
- f247b6c: update for review comments
  - https://github.com/dinngo/protocolink-logics/pull/20#discussion_r1252605565
  - https://github.com/dinngo/protocolink-logics/pull/20#pullrequestreview-1512236225
  - https://github.com/dinngo/protocolink-logics/pull/20#discussion_r1252484687
  - https://github.com/dinngo/protocolink-logics/pull/20#discussion_r1252491176

## 0.2.2

### Patch Changes

- 1ae6674: add zksync test environment
- 43fc5d7: rename scope to @protocolink

## 0.2.1

### Patch Changes

- b032e7d: format src/modules/univ3/contracts
- 754e793: refactor univ3 module

## 0.2.0

### Minor Changes

- 8f5caef: update for v0.2.0 router

### Patch Changes

- 6572845: regenerate contracts files with @typechain/ethers-v5@11.0.0
- bf0559d: move all logics folders to src/logics
- a8ac78e: Updated dependencies
  - @paraswap/sdk@6.2.1
  - @types/lodash@4.14.195
  - @uniswap/sdk-core@3.2.6
  - axios-retry@3.5.0
- 05d1493: add univ3 module

## 0.1.8

### Patch Changes

- f3a66d5: update slippage to logic itself
- b1aa6a7: utility custom data logic add 1inch swap token test
- 93d609e: Updated dependencies
  - @furucombo/composable-router-common@0.1.5
  - @furucombo/composable-router-core@0.1.5
  - type-fest@3.9.0

## 0.1.7

### Patch Changes

- 464e29c: fix yarn.lock issues - type-fest, @nomiclabs/hardhat-ethers
- 613678d: Updated dependencies
  - @furucombo/composable-router-common@0.1.4
  - @furucombo/composable-router-core@0.1.4
  - @paraswap/sdk@6.2.0
  - @types/lodash@4.14.194
  - axios@1.3.6
- 6c74271: utility add custom data logic

## 0.1.6

### Patch Changes

- b342573: update permitData.values.details.amount to hex string

## 0.1.5

### Patch Changes

- f9906f7: fix compound v3 supply base, withdraw base TokenList type

## 0.1.4

### Patch Changes

- d81e0b1: fix utility MultiSendLogicFields type

## 0.1.3

### Patch Changes

- 4077a18: add utility multi-send logic
- 1d0fe37: update for core.LogicBuilderInterface

## 0.1.2

### Patch Changes

- 800aa21: move axios to src/http.ts
- 3c65eaf: add logics' token list type

## 0.1.1

### Patch Changes

- 23745ea: update contract addresses for ETHTaipei 2023 hackathon

## 0.1.0

- The first version release for Composable Router.
