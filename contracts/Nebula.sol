//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

/// @title A loyalty program contract
/// @author 0xMampudi
/// @notice You can use this contract to take part in the Nebula loyalty program
/// @dev All function calls are currently implemented without side effects
contract Nebula is VRFConsumerBase, KeeperCompatibleInterface{

  event PartnerRegistered(address partner);
  event CustomerRegistered(address customer);
  event ArtistRegistered(address artist);
  event LogDepositMade(address indexed accountAddress, uint amount);
  event LogWithdrawal(address indexed accountAddress, uint withdrawAmount, uint newBalance);
  event OwnerChanged(address newOwner);

  uint public _sPartnerRegistrationFee = 0.2 * 10 ** 18; //0.2 ether
  uint public _sCustomerRegistrationFee = 0.1 * 10 ** 18; //0.1 ether
  uint public _sNumberOfCustomers;
  uint public _sNumberOfLotteryCustomers;
  uint public _sNumberOfPartners;
  uint public _sLastUpkeep;
  uint public _sCounter;
  uint public _sLotteryPercentage;

  enum LotteryState {Open, Calculating} 
  LotteryState public _sState;

  //vrf related
  address public _sLinkToken = 0xa36085F69e2889c224210F603D836748e7dC0088;
  address public _sVrfCoordinator = 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9;
  bytes32 public _sKeyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
  uint public _sChainLinkFee = 0.1 * 10 ** 18; //0.1 LINK

  address public _sOwner;
  address payable[] public _sCustomers;
  address payable[] public _sLotteryCustomers;
  address public _sRecentWinningCustomer;
  uint public _sRecentWinnings;

  mapping(address => bool) public _sPartners;
  mapping (address => uint) public _sBalances;

  modifier onlyOwner {
    require(msg.sender == _sOwner, "Not an owner");
    _;
  }


  constructor() VRFConsumerBase(_sVrfCoordinator, _sLinkToken){
    _sCounter = 0;
    _sLastUpkeep = block.timestamp;
    _sLotteryPercentage = 1; 
    _setOwner(msg.sender);
  }

  /// @notice Set contract owner
  /// @dev Sets the contract owner
  /// @param newOwner The new contract owner
  function setOwner(address newOwner) external onlyOwner {
    _setOwner(newOwner);
  }

  /// @notice Set contract owner
  /// @dev Sets the contract owner
  /// @param newOwner The new contract owner
  function _setOwner(address newOwner) internal {
    require(newOwner != address(0), "Owner cannot be a zero address");
    _sOwner = newOwner;
    emit OwnerChanged(newOwner);
  }

  /// @notice Register a new partner
  /// @dev Register a new partner
  /// @return bool true if partner is succesfully registred
  function registerPartner() public payable returns (bool) {
    require(_sPartners[msg.sender] == false, "The partnet already exists");
    require(msg.value >= _sPartnerRegistrationFee, "Not enough fee paid 0.2 ether");
    _sPartners[msg.sender] = true;
    _sNumberOfPartners++;
    _sBalances[msg.sender] = _sBalances[msg.sender] + msg.value;
    emit PartnerRegistered(msg.sender);
    return _sPartners[msg.sender];
  }

  //check if partner is registered
  function partnerRegistered(address _partner) public view returns (bool) {
    return _sPartners[_partner];
  }

  //partner pays to register a customer
  function registerCustomer(address payable _customer) public payable returns (bool) {
    require(_sPartners[msg.sender], "Partner not registered");
    require(msg.value >= _sCustomerRegistrationFee, "Not enough fee paid: 0.1 ether");
    //require(_sCustomers[_customer] == false, "The customer already exists");
    _sCustomers.push(_customer);
    _sNumberOfCustomers++;
    _sBalances[_customer] = _sBalances[_customer] + msg.value;
    emit CustomerRegistered(_customer);
    return true;
  }

  /// @notice Deposit ether into loyalty program
  /// @return The balance of the user after the deposit is made
  function deposit() public payable returns (uint) {
    require(_sPartners[msg.sender], "Partner not enrolled");
    _sBalances[msg.sender] = _sBalances[msg.sender] + msg.value;
    emit LogDepositMade(msg.sender, msg.value);
    return msg.value;
  }

  /// @notice Withdraw ether from from the loyalty program
  /// @dev This does not return any excess ether sent to it
  /// @param withdrawAmount amount you want to withdraw
  /// @return The balance remaining for the user
  function withdraw(uint withdrawAmount) public returns (uint) {
    require(_sBalances[msg.sender] >= withdrawAmount,"Insufficient funds");
    _sBalances[msg.sender] = _sBalances[msg.sender] - withdrawAmount;
    //payable(msg.sender).transfer(withdrawAmount);

    (bool success,) = msg.sender.call{value: withdrawAmount}("");
    require(success,"Withdraw transfer failed");

    emit LogWithdrawal(msg.sender, withdrawAmount, withdrawAmount);
    return withdrawAmount;
  } 

  function enterRaffle(address payable _customer, uint totalSpent) public returns (bool){
    require(_sPartners[msg.sender], "Partner not enrolled");
    require(totalSpent > 1000,"Not enough funds spent");
    uint winnings = address(this).balance * 1/100;
    _sBalances[_customer] = _sBalances[_customer] + winnings;
    _sBalances[msg.sender] = _sBalances[msg.sender] - winnings;
    _sLotteryCustomers.push(_customer);
    _sNumberOfLotteryCustomers++;
    return true;
  }

  //getting random winner
  function fulfillRandomness(bytes32 /* requestId*/, uint256 randomness) internal override{
    require(_sLotteryCustomers.length > 0,"No customer is lottery");
    require(_sState == LotteryState.Open,"The lottery is closed");
    uint luckyWinner = randomness % _sLotteryCustomers.length;
    address payable winner = _sLotteryCustomers[luckyWinner];
    _sRecentWinningCustomer = winner;
    uint winnings = address(this).balance * _sLotteryPercentage/100;
    (bool success,) = winner.call{value: winnings}("");
    require(success,"Lottery winner transfer failed");
    _sBalances[winner] = _sBalances[winner] - winnings;
    _sRecentWinnings = winnings;
    _sState = LotteryState.Open;
    _sLastUpkeep = block.timestamp;
  }


  //after registering with keeper it will run this and call perform upkeep if all the things are true;
  function checkUpkeep(bytes calldata checkData /* checkData */) public view override returns(bool _upkeepNeeded, bytes memory performData){
    bool hasLink = LINK.balanceOf(address(this))>= _sChainLinkFee;
    bool isOpen = _sState == LotteryState.Open;
    bool isTime = (block.timestamp - _sLastUpkeep) > 12 hours;
    bool enoughPlayers = _sLotteryCustomers.length > 1;
    _upkeepNeeded = hasLink && isOpen && isTime && enoughPlayers;

  }

  //running the lottery on a schedule
  function performUpkeep(bytes calldata /* calldata */) external override {
    require(_sState == LotteryState.Open,"Lottery is closed");
    require((block.timestamp - _sLastUpkeep) > 1 minutes,"1 minute has not passed");
    require(LINK.balanceOf(address(this))>= _sChainLinkFee,"Not enough Link");
    _sState = LotteryState.Calculating;
    _sLastUpkeep = block.timestamp;
    _sCounter = _sCounter + 1;
    //requests randomness which will call fullfillrandomness
    requestRandomness(_sKeyHash, _sChainLinkFee);
  }

  function balance() public view returns (uint){
    return address(this).balance;
  }

  function checkBalance(address _customer) public view returns (uint){
    return _sBalances[_customer];
  }
}
