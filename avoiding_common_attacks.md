# Avoiding Common Attacks

## Guarding Against Solidity Risks
* (SWC-101) Using Solidity >= v0.8.0 that has SafeMath integrated to ensure automatic reverts for integer overflows. This feature is applied in the purchase function in Nebula.sol when calculating the amount of loyalty point ETH that goes to the customer.
* Use of Require to ensure:
1. Partner is not already registred
1. Partner registration fee is not enough
1. Customer registration fee is not enough

* (SWC-111) Using .call instead of .transfer to send Ether in the withdraw function
* Implemented Checks-Effects-Interactions so that external calls or transfers of Ether happen at the end of each function and after any necessary state changes have been made, to prevent reentrancy attacks.

## Guarding Against Smart Contract Risks
(SWC-107) Reentrancy Guard: nonReentrant modifier used in the purchase function to prevent multiple calls from external caller draining the smart contract when it is exposed during the .call() function.
