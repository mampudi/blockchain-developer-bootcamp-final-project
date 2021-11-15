//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

//yarn add @chainlink/contracts
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

 contract Nebula is VRFConsumerBase, KeeperCompatibleInterface{

  event PartnerRegistered(address partner);
  event CustomerRegistered(address customer);
  event ArtistRegistered(address artist);
  event LogDepositMade(address indexed accountAddress, uint amount);
  event LogWithdrawal(address indexed accountAddress, uint withdrawAmount, uint newBalance);
  event OwnerChanged(address newOwner);

  uint public _sPartnerRegistrationFee = 1000 wei;
  uint public _sCustomerRegistrationFee = 100 wei;
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

  //set the owner and make sure it is only callable by the current owner
  function setOwner(address newOwner) external onlyOwner {
    _setOwner(newOwner);
  }

  //cannot only get called with the contract e.g the constructor
  function _setOwner(address newOwner) internal {
    require(newOwner != address(0), "Owner cannot be a zero address");
    _sOwner = newOwner;
    emit OwnerChanged(newOwner);
  }

  //partner pays to register
  function registerPartner(address _partner) public payable returns (bool) {
    require(_sPartners[_partner] == false, "The partnet already exists");
    require(msg.value >= _sPartnerRegistrationFee, "Not enough fee paid 1000 wei");
    _sPartners[_partner] = true;
    _sNumberOfPartners++;
    _sBalances[address(this)] += msg.value;
    emit PartnerRegistered(_partner);
    return _sPartners[_partner];
  }

  //partner pays to register a customer
  function registerCustomer(address payable _customer) public payable returns (bool) {
    require(_sPartners[msg.sender], "Partner not register");
    require(msg.value >= _sCustomerRegistrationFee, "Not enough fee paid: 100 wei");
    //require(_sCustomers[_customer] == false, "The customer already exists");
    _sCustomers.push(_customer);
    _sNumberOfCustomers++;
    _sBalances[address(this)] += msg.value;
    emit PartnerRegistered(msg.sender);
    return true;
  }


  /// @notice Deposit ether into bank
  /// @return The balance of the user after the deposit is made
  function deposit(uint _amount) public payable returns (uint) {
    require(_sPartners[msg.sender], "Partner not enrolled");
    _sBalances[msg.sender] += msg.value;
    emit LogDepositMade(msg.sender, _amount);
    return msg.value;
  }

  /// @notice Withdraw ether from bank
  /// @dev This does not return any excess ether sent to it
  /// @param withdrawAmount amount you want to withdraw
  /// @return The balance remaining for the user
  function withdraw(uint withdrawAmount) public returns (uint) {
    //console.log("Kgang", _sBalances[msg.sender]);
    require(_sBalances[msg.sender] >= withdrawAmount,"Insufficient funds");
    _sBalances[msg.sender] = _sBalances[msg.sender] - withdrawAmount;
    payable(msg.sender).transfer(withdrawAmount);
    emit LogWithdrawal(msg.sender, withdrawAmount, withdrawAmount);
    return withdrawAmount;
  } 

  function enterRaffle(address payable _customer, uint totalSpent) public{
    require(totalSpent > 0,"Not enough funds spent");
    _sLotteryCustomers.push(_customer);
    _sNumberOfLotteryCustomers++;
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

  function requestFulfillRandomnessLocal(uint256 randomness) public {
    require(_sLotteryCustomers.length > 0,"No customer is lottery");
    require(_sState == LotteryState.Open,"The lottery is closed");
     uint luckyWinner = randomness % _sLotteryCustomers.length;
     address payable winner = _sLotteryCustomers[luckyWinner];
     _sRecentWinningCustomer = winner;
     uint winnings = address(this).balance * _sLotteryPercentage/100;
     (bool success,) = winner.call{value: winnings}("");
     require(success,"Lottery winner transfer failed");
     _sBalances[address(this)] = _sBalances[address(this)] - winnings;
     _sBalances[winner] = _sBalances[winner] + winnings;
     _sRecentWinnings = winnings;
     delete _sLotteryCustomers;
     _sState = LotteryState.Open;
    _sLastUpkeep = block.timestamp;
  }

  //after registering with keeper it will run this and call perform upkeep if all the things are true;
  function checkUpkeep(bytes calldata checkData /* checkData */) public view override returns(bool _upkeepNeeded, bytes memory performData /* performData */){
    bool hasLink = LINK.balanceOf(address(this))>= _sChainLinkFee;
    bool isOpen = _sState == LotteryState.Open;
    bool isTime = (block.timestamp - _sLastUpkeep) > 1 minutes;
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
    //requests randomness and calls fullfillrandomness
    requestRandomness(_sKeyHash, _sChainLinkFee);
  }

  function balance() public view returns (uint){
    return address(this).balance;
  }



}
