
// contract address on Kovan:
const ssAddress = '0x96034B917fE8915649ff135b6143F384ED2B4EF0'


const ssABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "artist",
        "type": "address"
      }
    ],
    "name": "ArtistRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "customer",
        "type": "address"
      }
    ],
    "name": "CustomerRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "accountAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogDepositMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "accountAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      }
    ],
    "name": "LogWithdrawal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnerChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "partner",
        "type": "address"
      }
    ],
    "name": "PartnerRegistered",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "_sBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sChainLinkFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sCustomerRegistrationFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_sCustomers",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sKeyHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sLastUpkeep",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sLinkToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_sLotteryCustomers",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sLotteryPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sNumberOfCustomers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sNumberOfLotteryCustomers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sNumberOfPartners",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sPartnerRegistrationFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "_sPartners",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sRecentWinningCustomer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sRecentWinnings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sState",
    "outputs": [
      {
        "internalType": "enum Nebula.LotteryState",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_sVrfCoordinator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "requestId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "randomness",
        "type": "uint256"
      }
    ],
    "name": "rawFulfillRandomness",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registerPartner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_partner",
        "type": "address"
      }
    ],
    "name": "partnerRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_customer",
        "type": "address"
      }
    ],
    "name": "registerCustomer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "withdrawAmount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_customer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalSpent",
        "type": "uint256"
      }
    ],
    "name": "enterRaffle",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "checkData",
        "type": "bytes"
      }
    ],
    "name": "checkUpkeep",
    "outputs": [
      {
        "internalType": "bool",
        "name": "_upkeepNeeded",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "performData",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "performUpkeep",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_customer",
        "type": "address"
      }
    ],
    "name": "checkBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'Please click Connect Wallet to sign in with Meta-Mask'

      let registerPartner = document.getElementById('mm-registerPartner')
      registerPartner.hidden = true;
      let registerCustomer = document.getElementById('mm-registerCustomer')
      registerCustomer.hidden = true;
      let earn = document.getElementById('mm-earn')
      earn.hidden = true;
      let disconnect = document.getElementById('mm-disconnect')
      disconnect.hidden = true;


      // add in web3 here
      var web3 = new Web3(window.ethereum)

    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'

      let registerPartner = document.getElementById('mm-registerPartner')
      registerPartner.hidden = true;
      let registerCustomer = document.getElementById('mm-registerCustomer')
      registerCustomer.hidden = true;
      let earn = document.getElementById('mm-earn')
      earn.hidden = true;
      let disconnect = document.getElementById('mm-disconnect')
      disconnect.hidden = true;
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'

    let registerPartner = document.getElementById('mm-registerPartner')
      registerPartner.hidden = true;
      let registerCustomer = document.getElementById('mm-registerCustomer')
      registerCustomer.hidden = true;
      let earn = document.getElementById('mm-earn')
      earn.hidden = true;
      let disconnect = document.getElementById('mm-disconnect')
      disconnect.hidden = true;
  }
})


var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})

  console.log("kgang1" + ethereum.selectedAddress)
  if (typeof ethereum.selectedAddress === 'undefined') {
    console.log("kgang2" + ethereum.selectedAddress)
    window.location.reload();
  }
  
  let balance = await web3.eth.getBalance(ethereum.selectedAddress);


  let tvl = await web3.eth.getBalance(ssAddress);
  let network = await web3.eth.net.getNetworkType();

  mmEnable.innerHTML = ethereum.selectedAddress + " | <b>ETH:</b> " + web3.utils.fromWei(balance)+ " | <b>Network:<b/> " + network + " | <b>TVL:</b> " + web3.utils.fromWei(tvl) + "ETH";
  mmEnable.className = "active";

  let registerPartner = document.getElementById('mm-registerPartner')
  registerPartner.hidden = false;
  let registerCustomer = document.getElementById('mm-registerCustomer')
  registerCustomer.hidden = false;
  let earn = document.getElementById('mm-earn')
  earn.hidden = false;
  let disconnect = document.getElementById('mm-disconnect')
  disconnect.hidden = false;

  

  var dapp = document.getElementById('dapp');
  var home = document.getElementById('home');
  var registerPartnerDiv = document.getElementById('registerPartner');

  
  dapp.hidden = true;
  home.hidden = true;
  registerPartnerDiv.hidden = false;
}

const mmDisconnect = document.getElementById('mm-disconnect');

mmDisconnect.onclick = async () => {
  location.reload();
}

const mmEarn = document.getElementById('mm-earn');

mmEarn.onclick = async () => {
  var dapp = document.getElementById('dapp');
  var home = document.getElementById('home');
  var registerPartnerDiv = document.getElementById('registerPartner');
  var registerCustomerDiv = document.getElementById('registerCustomer');

  
  dapp.hidden = false;
  home.hidden = true;
  registerPartnerDiv.hidden = true;
  registerCustomerDiv.hidden = true;
}

const mmRegisterPartner = document.getElementById('mm-registerPartner');

mmRegisterPartner.onclick = async () => {
  var dapp = document.getElementById('dapp');
  var home = document.getElementById('home');
  var registerPartnerDiv = document.getElementById('registerPartner');
  var registerCustomerDiv = document.getElementById('registerCustomer');

  
  dapp.hidden = true;
  home.hidden = true;
  registerCustomerDiv.hidden = true;
  registerPartnerDiv.hidden = false;
}

const mmCustomer = document.getElementById('mm-registerCustomer');

mmCustomer.onclick = async () => {
  var dapp = document.getElementById('dapp');
  var home = document.getElementById('home');
  var registerPartnerDiv = document.getElementById('registerPartner');
  var registerCustomerDiv = document.getElementById('registerCustomer');

  
  dapp.hidden = true;
  home.hidden = true;
  registerCustomerDiv.hidden = false;
  registerPartnerDiv.hidden = true;
}

// grab the button for input to a contract:

const ssSubmit = document.getElementById('ss-registerpartner-button');

ssSubmit.onclick = async () => {
  const ssInputValue = document.getElementById('ss-partnerregistrationfee-input-box').value;
  console.log(ssInputValue)
  var web3 = new Web3(window.ethereum)

  const ssDisplayValue = document.getElementById('ss-display-registrationResult')
  ssDisplayValue.innerHTML = "processing...";

  // instantiate smart contract instance
  
  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)

  var value = await nebula.methods.registerPartner().send({from: ethereum.selectedAddress, value: ssInputValue * 10 ** 18})
  if(value === true){
    ssDisplayValue.innerHTML = "The address is registered as partner";
    
    await ethereum.request({ method: 'eth_requestAccounts'})
    let balance = await web3.eth.getBalance(ethereum.selectedAddress);
    let tvl = await web3.eth.getBalance(ssAddress);
    let network = await web3.eth.net.getNetworkType();
  
    mmEnable.innerHTML = ethereum.selectedAddress + " | <b>ETH:</b> " + web3.utils.fromWei(balance)+ " | <b>Network:<b/> " + network + " | <b>TVL:</b> " + web3.utils.fromWei(tvl) + "ETH";
    mmEnable.className = "active";
  }
  else{
    ssDisplayValue.innerHTML = "The address was not registered successfully";
  }
}



const ssGetPartnerValue = document.getElementById('ss-get-partnervalue')

ssGetPartnerValue.onclick = async () => {
  const ssDisplayValue = document.getElementById('ss-display-partnervalue')
  ssDisplayValue.innerHTML = "Processing";

  const ssPartnerValue = document.getElementById('ss-display-partnervaluelocked')
  ssPartnerValue.innerHTML = "Nebula Balance: O";

  var web3 = new Web3(window.ethereum)

  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)
  const ssInputValue = document.getElementById('ss-partneraddress-input-box').value;
  var value = await nebula.methods.partnerRegistered(ssInputValue).call();

  if(!!value)
    ssDisplayValue.innerHTML = "The address is registered successfully";
  else{
    ssDisplayValue.innerHTML = "The address was not registered successfully";
  }


  var partnervalueLocked = await nebula.methods.checkBalance(ssInputValue).call();

  if(partnervalueLocked > 0){
    ssPartnerValue.innerHTML = "Nebula Balance: " + web3.utils.fromWei(partnervalueLocked) + " ETH";
  }
}

const ssGetCsutomerValue = document.getElementById('ss-get-customervalue')

ssGetCsutomerValue.onclick = async () => {
  const ssDisplayValue = document.getElementById('ss-display-customervalue')
  ssDisplayValue.innerHTML = "Customer not found";
  var web3 = new Web3(window.ethereum)

  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)
  const ssInputValue = document.getElementById('ss-customeraddress-input-box').value;
  var value = await nebula.methods.checkBalance(ssInputValue).call();

  console.log(value);

  if(value > 0){
    ssDisplayValue.innerHTML = web3.utils.fromWei(value) + " ETH";
  }
}

const ssRegisterCustomerSubmit = document.getElementById('ss-registercustomer-button');

ssRegisterCustomerSubmit.onclick = async () => {
  const ssInputValue = document.getElementById('ss-customerregaddress-input-box').value;
  const ssInput2Value = document.getElementById('ss-customerregistrationfee-input-box').value;
  console.log(ssInputValue)
  var web3 = new Web3(window.ethereum)

  const ssDisplayValue = document.getElementById('ss-display-customerRegistrationResult')
  ssDisplayValue.innerHTML = "processing...";

  // instantiate smart contract instance
  
  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)

  var value = await nebula.methods.registerCustomer(ssInputValue).send({from: ethereum.selectedAddress, value: ssInput2Value * 10 ** 18});

  if(!!value)
    ssDisplayValue.innerHTML = "The address is registered successfully";
  else{
    ssDisplayValue.innerHTML = "The address was not registered successfully";
  }
  
  await ethereum.request({ method: 'eth_requestAccounts'})
  let balance = await web3.eth.getBalance(ethereum.selectedAddress);
  let tvl = await web3.eth.getBalance(ssAddress);
  let network = await web3.eth.net.getNetworkType();

  mmEnable.innerHTML = ethereum.selectedAddress + " | <b>ETH:</b> " + web3.utils.fromWei(balance)+ " | <b>Network:<b/> " + network + " | <b>TVL:</b> " + web3.utils.fromWei(tvl) + "ETH";
  mmEnable.className = "active";
  
}

const ssGetEarnValue = document.getElementById('ss-get-earnvalue')

ssGetEarnValue.onclick = async () => {
  const ssDisplayValue = document.getElementById('ss-display-earnvalue')
  ssDisplayValue.innerHTML = "Customer not found";
  var web3 = new Web3(window.ethereum)

  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)
  const ssInputValue = document.getElementById('ss-earnaddress-input-box').value;
  var value = await nebula.methods.checkBalance(ssInputValue).call();

  if(value > 0){
    ssDisplayValue.innerHTML = "Nebula Balance: " + web3.utils.fromWei(value) + " ETH";
  }
}

const ssEarnSubmit = document.getElementById("ss-earn-button");

ssEarnSubmit.onclick = async () => {
  const ssInputValue = document.getElementById('ss-earnaddress-input-box').value;
  const ssInput2Value = document.getElementById('ss-earnamount-input-box').value;
  console.log(ssInputValue)
  var web3 = new Web3(window.ethereum)

  const ssDisplayValue = document.getElementById('ss-display-customerEarnResult')
  ssDisplayValue.innerHTML = "The customer has not earned loyalty points and is not entered into the raffle";

  // instantiate smart contract instance
  
  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)

  var value = await nebula.methods.enterRaffle(ssInputValue, ssInput2Value).call();
  console.log(value);

  if(value === true){
    var newValue = await nebula.methods.checkBalance(ssInputValue).call();
    ssDisplayValue.innerHTML = "Nebula Balance: " + web3.utils.fromWei(newValue);
  
    await ethereum.request({ method: 'eth_requestAccounts'})
    let balance = await web3.eth.getBalance(ethereum.selectedAddress);
    let tvl = await web3.eth.getBalance(ssAddress);
    let network = await web3.eth.net.getNetworkType();
  
    mmEnable.innerHTML = ethereum.selectedAddress + " | <b>ETH:</b> " + web3.utils.fromWei(balance)+ " | <b>Network:<b/> " + network + " | <b>TVL:</b> " + web3.utils.fromWei(tvl) + "ETH";
    mmEnable.className = "active";
  }

  
}

