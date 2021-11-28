# Design Pattern Decisions

## Inheritance and Interfaces
* Inherited VRFConsumerBase and KeeperCompatibleInterface contracts to use Chainlink VRF (Verifiable Random Function) and Keepers to ensure flawless execution of Upkeeps when expected.

## Oracles
* Chainlink VRF (Verifiable Random Function) is a provably-fair and verifiable source of randomness designed for smart contracts.
* Chainlink Keepers provide users with a decentralized network of nodes that are incentivized to perform all registered jobs (or Upkeeps) without competing with each other.

## Access Control Design Patterns
* Only the current owner can set a new owner
