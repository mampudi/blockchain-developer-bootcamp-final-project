// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Nebula {
  
  //State variables

  //Events - publicize actions to external listeners

  //functions
  constructor() public {
  }

  // Fallback function - Called if other functions don't match call or
  // sent ether without data
  // Typically, called when invalid data is sent
  // Added so ether sent to this contract is reverted if the contract fails
  // otherwise, the sender's money is transferred to contract
  function () external payable {
    revert();
  }

  //Register partner
  function registerPartner(address _partner) public {

  }

  //Register customer
  function registerCustomer(address _customer) public {

  }

  //Register artist
  function registerArtist(address _artist) public {

  }

}
