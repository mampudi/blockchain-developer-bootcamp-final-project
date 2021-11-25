

// contract address on Ropsten:
const ssAddress = '0x295eb38E3660d440B1dd54822644E545635f44E1'

// add contract ABI from Remix:

const ssABI =
[
	{
		"inputs": [],
		"name": "retrieve",
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
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
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
  let network = await web3.eth.net.getNetworkType();

  mmEnable.innerHTML = "<b>Account:</b> " + ethereum.selectedAddress + " | <b>ETH:</b> " + web3.utils.fromWei(balance)+ " | Network: " + network;
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
  registerPartnerDiv.hidden = false;
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

const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
  const ssInputValue = document.getElementById('ss-input-box').value;
  console.log(ssInputValue)
  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance
  
  const simpleStorage = new web3.eth.Contract(ssABI, ssAddress)
  simpleStorage.setProvider(window.ethereum)

  await simpleStorage.methods.store(ssInputValue).send({from: ethereum.selectedAddress})

}



const ssGetValue = document.getElementById('ss-get-value')

ssGetValue.onclick = async () => {

  var web3 = new Web3(window.ethereum)

  const simpleStorage = new web3.eth.Contract(ssABI, ssAddress)
  simpleStorage.setProvider(window.ethereum)

  var value = await simpleStorage.methods.retrieve().call()

  console.log(value)

  const ssDisplayValue = document.getElementById('ss-display-value')

  ssDisplayValue.innerHTML = 'Current Simple Storage Value: ' + value

}

