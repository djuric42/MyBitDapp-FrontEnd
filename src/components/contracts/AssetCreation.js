export const ADDRESS = '0x5E8E4b6EBeC4aF9CbB69Befab8Aa483C234D6f7d';
export const ABI = [
  {
    constant: false,
    inputs: [
      {
        name: '_myBitFoundationPercentage',
        type: 'uint256'
      },
      {
        name: '_installerPercentage',
        type: 'uint256'
      },
      {
        name: '_functionSigner',
        type: 'address'
      }
    ],
    name: 'changeFundingPercentages',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_functionInitiator',
        type: 'address'
      },
      {
        name: '_holdingAddress',
        type: 'address'
      }
    ],
    name: 'destroy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'database',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32'
      },
      {
        name: '_amountToBeRaised',
        type: 'uint256'
      },
      {
        name: '_operatorPercentage',
        type: 'uint256'
      },
      {
        name: '_amountToEscrow',
        type: 'uint256'
      },
      {
        name: '_installerID',
        type: 'bytes32'
      },
      {
        name: '_assetType',
        type: 'bytes32'
      }
    ],
    name: 'newAsset',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_newTimeGivenForFunding',
        type: 'uint256'
      }
    ],
    name: 'changeFundingTime',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'fundingTime',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32'
      },
      {
        name: '_functionSigner',
        type: 'address'
      }
    ],
    name: 'removeAsset',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_database',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_creator',
        type: 'address'
      },
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_assetType',
        type: 'bytes32'
      }
    ],
    name: 'LogAssetFundingStarted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_installerID',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_amountToBeRaised',
        type: 'uint256'
      }
    ],
    name: 'LogAssetInfo',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_from',
        type: 'address'
      },
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_amountOf',
        type: 'uint256'
      }
    ],
    name: 'LogLockAssetEscrow',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_remover',
        type: 'address'
      },
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'LogAssetRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_sender',
        type: 'address'
      },
      {
        indexed: false,
        name: '_newTimeForFunding',
        type: 'uint256'
      },
      {
        indexed: false,
        name: '_blockTimestamp',
        type: 'uint256'
      }
    ],
    name: 'LogFundingTimeChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_myBitFoundationPercentage',
        type: 'uint256'
      },
      {
        indexed: false,
        name: '_installerPercentage',
        type: 'uint256'
      }
    ],
    name: 'LogFundingPercentageChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_locationSent',
        type: 'address'
      },
      {
        indexed: true,
        name: '_amountSent',
        type: 'uint256'
      },
      {
        indexed: true,
        name: '_caller',
        type: 'address'
      }
    ],
    name: 'LogDestruction',
    type: 'event'
  }
];
