

// contract address on Ropsten:
const ssAddress = '0xf2706442289b325e17427D46d00e577aEbE2B16d'

// add contract ABI from Remix:

const ssABI =
[
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "payable": true
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "payable": true
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
    "type": "function",
    "payable": true
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
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "randomness",
        "type": "uint256"
      }
    ],
    "name": "requestFulfillRandomnessLocal",
    "outputs": [],
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
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
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
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
  }
})


var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
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
  ssDisplayValue.innerHTML = "The address is not registered as partner";

  // instantiate smart contract instance
  
  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)

  var value = await nebula.methods.registerPartner().send({from: ethereum.selectedAddress, value: ssInputValue * 10 ** 18})
  if(value === true){
    ssDisplayValue.innerHTML = "The address is registered as partner";
  }
}



const ssGetPartnerValue = document.getElementById('ss-get-partnervalue')

ssGetPartnerValue.onclick = async () => {
  const ssDisplayValue = document.getElementById('ss-display-partnervalue')
  ssDisplayValue.innerHTML = "The address is not registered as partner";
  var web3 = new Web3(window.ethereum)

  const nebula = new web3.eth.Contract(ssABI, ssAddress)
  nebula.setProvider(window.ethereum)
  const ssInputValue = document.getElementById('ss-partneraddress-input-box').value;
  var value = await nebula.methods.partnerRegistered(ssInputValue).call();

  if(value === true){
    ssDisplayValue.innerHTML = "The address is registered as partner";
  }
}

