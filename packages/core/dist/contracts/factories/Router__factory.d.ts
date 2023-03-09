import { Signer, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { Router, RouterInterface } from '../Router';
type RouterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Router__factory extends ContractFactory {
    constructor(...args: RouterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Router>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Router;
    connect(signer: Signer): Router__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b0319908116600190811790925581541660021790556113b3806100406000396000f3fe60806040526004361061002d5760003560e01c80634f8632ba146100395780636d05608e1461007557600080fd5b3661003457005b600080fd5b34801561004557600080fd5b50600054610059906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b610088610083366004610f9b565b61008a565b005b600080546001600160a01b0316600019016100b95750600080546001600160a01b0319163317905560016100f8565b6001546001600160a01b031633146100e45760405163f7a632f560e01b815260040160405180910390fd5b600180546001600160a01b03191660021790555b61010485858585610125565b801561011e57600080546001600160a01b03191660011790555b5050505050565b8260005b818110156107cf57600086868381811061014557610145611007565b9050602002810190610157919061101d565b610165906020810190611054565b9050600087878481811061017b5761017b611007565b905060200281019061018d919061101d565b61019b906020810190611076565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394508b92508a91508690508181106101e6576101e6611007565b90506020028101906101f8919061101d565b6102069060408101906110bd565b808060200260200160405190810160405280939291908181526020016000905b82821015610252576102436060830286013681900381019061111c565b81526020019060010190610226565b50505050509050600089898681811061026d5761026d611007565b905060200281019061027f919061101d565b61028d90606081019061118b565b808060200260200160405190810160405280939291908181526020016000905b828210156102d9576102ca604083028601368190038101906111d5565b815260200190600101906102ad565b5050505050905060008a8a878181106102f4576102f4611007565b9050602002810190610306919061101d565b6103179060a0810190608001611054565b905060008b8b8881811061032d5761032d611007565b905060200281019061033f919061101d565b6103509060c081019060a001611054565b9050600061035d8661123a565b90506001600160e01b0319811663095ea7b360e01b148061038e57506001600160e01b031981166323b872dd60e01b145b156103ac57604051637f9d7cc560e01b815260040160405180910390fd5b6001600160a01b0383166103be578692505b8451600090815b818110156105235760008882815181106103e1576103e1611007565b6020026020010151600001519050600089838151811061040357610403611007565b602002602001015160200151905060006000198203610441578a848151811061042e5761042e611007565b60200260200101516040015190506104c7565b81158061044f575061271082115b1561046d5760405163c6cc5d7f60e01b815260040160405180910390fd5b6127108261047a85610881565b6104849190611287565b61048e91906112a4565b905060008b85815181106104a4576104a4611007565b602002602001015160400151905060001981146104c5578c81016024018290525b505b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016104f457809550610518565b886001600160a01b0316836001600160a01b03161461051857610518838a8361091f565b5050506001016103c5565b50855160008167ffffffffffffffff81111561054157610541611106565b60405190808252806020026020018201604052801561056a578160200160208202803683370190505b50905060005b828110156105c35761059e89828151811061058d5761058d611007565b602002602001015160000151610881565b8282815181106105b0576105b0611007565b6020908102919091010152600101610570565b506001600160a01b038616156105ef57600180546001600160a01b0319166001600160a01b0388161790555b6040805180820190915260148152734552524f525f524f555445525f4558454355544560601b6020820152610632906001600160a01b038d16908c908790610a43565b506001546001600160a01b031660021461065f57604051634875ede560e11b815260040160405180910390fd5b60005b838110156106ec5760008a828151811061067e5761067e611007565b602002602001015160000151905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316816001600160a01b0316141580156106d45750886001600160a01b0316816001600160a01b031614155b156106e3576106e3818a610b20565b50600101610662565b5060005b828110156107b757600089828151811061070c5761070c611007565b602002602001015160000151905060008a838151811061072e5761072e611007565b6020026020010151602001519050600084848151811061075057610750611007565b602002602001015161076184610881565b61076b91906112c6565b9050818110156107ac5760405163db42144d60e01b81526001600160a01b038416600482015260248101839052604481018290526064015b60405180910390fd5b5050506001016106f0565b50506001909a01995061012998505050505050505050565b508160005b818110156108785760008585838181106107f0576107f0611007565b90506020020160208101906108059190611054565b9050600061081282610881565b905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038316016108545760005461084f906001600160a01b031682610c60565b61086e565b60005461086e906001600160a01b03848116911683610d79565b50506001016107d4565b50505050505050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038316016108af575047919050565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091791906112d9565b90505b919050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b15801561096957600080fd5b505af192505050801561097a575060015b610a3e5760405163095ea7b360e01b81526001600160a01b0383811660048301526000602483015284169063095ea7b390604401600060405180830381600087803b1580156109c857600080fd5b505af11580156109dc573d6000803e3d6000fd5b505060405163095ea7b360e01b81526001600160a01b038581166004830152602482018590528616925063095ea7b39150604401600060405180830381600087803b158015610a2a57600080fd5b505af1158015610878573d6000803e3d6000fd5b505050565b606082471015610aa45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016107a3565b600080866001600160a01b03168587604051610ac09190611316565b60006040518083038185875af1925050503d8060008114610afd576040519150601f19603f3d011682016040523d82523d6000602084013e610b02565b606091505b5091509150610b1387838387610dcb565b925050505b949350505050565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e90604401602060405180830381865afa158015610b70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9491906112d9565b1115610c5c5760405163095ea7b360e01b81526001600160a01b0382811660048301526000602483015283169063095ea7b390604401600060405180830381600087803b158015610be457600080fd5b505af1925050508015610bf5575060015b610c5c5760405163095ea7b360e01b81526001600160a01b0382811660048301526001602483015283169063095ea7b390604401600060405180830381600087803b158015610c4357600080fd5b505af1158015610c57573d6000803e3d6000fd5b505050505b5050565b80471015610cb05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016107a3565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610cfd576040519150601f19603f3d011682016040523d82523d6000602084013e610d02565b606091505b5050905080610a3e5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016107a3565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a3e908490610e44565b60608315610e3a578251600003610e33576001600160a01b0385163b610e335760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107a3565b5081610b18565b610b188383610f16565b6000610e99826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f409092919063ffffffff16565b805190915015610a3e5780806020019051810190610eb79190611328565b610a3e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016107a3565b815115610f265781518083602001fd5b8060405162461bcd60e51b81526004016107a3919061134a565b6060610b188484600085610a43565b60008083601f840112610f6157600080fd5b50813567ffffffffffffffff811115610f7957600080fd5b6020830191508360208260051b8501011115610f9457600080fd5b9250929050565b60008060008060408587031215610fb157600080fd5b843567ffffffffffffffff80821115610fc957600080fd5b610fd588838901610f4f565b90965094506020870135915080821115610fee57600080fd5b50610ffb87828801610f4f565b95989497509550505050565b634e487b7160e01b600052603260045260246000fd5b6000823560be1983360301811261103357600080fd5b9190910192915050565b80356001600160a01b038116811461091a57600080fd5b60006020828403121561106657600080fd5b61106f8261103d565b9392505050565b6000808335601e1984360301811261108d57600080fd5b83018035915067ffffffffffffffff8211156110a857600080fd5b602001915036819003821315610f9457600080fd5b6000808335601e198436030181126110d457600080fd5b83018035915067ffffffffffffffff8211156110ef57600080fd5b6020019150606081023603821315610f9457600080fd5b634e487b7160e01b600052604160045260246000fd5b60006060828403121561112e57600080fd5b6040516060810181811067ffffffffffffffff8211171561115f57634e487b7160e01b600052604160045260246000fd5b60405261116b8361103d565b815260208301356020820152604083013560408201528091505092915050565b6000808335601e198436030181126111a257600080fd5b83018035915067ffffffffffffffff8211156111bd57600080fd5b6020019150600681901b3603821315610f9457600080fd5b6000604082840312156111e757600080fd5b6040516040810181811067ffffffffffffffff8211171561121857634e487b7160e01b600052604160045260246000fd5b6040526112248361103d565b8152602083013560208201528091505092915050565b805160208201516001600160e01b031980821692919060048310156112695780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761129e5761129e611271565b92915050565b6000826112c157634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561129e5761129e611271565b6000602082840312156112eb57600080fd5b5051919050565b60005b8381101561130d5781810151838201526020016112f5565b50506000910152565b600082516110338184602087016112f2565b60006020828403121561133a57600080fd5b8151801515811461106f57600080fd5b60208152600082518060208401526113698160408501602087016112f2565b601f01601f1916919091016040019291505056fea26469706673582212201c18c17e60f5dcb7011f963d721a4f3d4908c525d019a644b04f375018d5515164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenReturn";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBps";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallback";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidERC20Sig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LengthMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnresetCallback";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountBps";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountOrOffset";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IRouter.Input[]";
                readonly name: "inputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountMin";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IRouter.Output[]";
                readonly name: "outputs";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "callback";
                readonly type: "address";
            }];
            readonly internalType: "struct IRouter.Logic[]";
            readonly name: "logics";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "tokensReturn";
            readonly type: "address[]";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "user";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Router;
}
export {};