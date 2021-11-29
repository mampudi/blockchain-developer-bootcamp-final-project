# Nebula Loyalty Program

This is a decentralized loyalty program that allows customers to earn ETH when they purchase from partners. 

# About

The purpose of this project is to develop a platform where customers can earn ETH when they purchase from partners. When making a purchase the partner will reward the customer with ETH based on the total value that the customer spent. The customer can then sawp the ETH for DAI or other ERC20 tokens allowing customers to be in total control of how they move and preserve their value. This is in contrast to how most loyalty programs function as the points are help by the loyalty program owner and customers can not move around in a permissionless way with the points they have earned.

The customers that have made a purchase from any of the partners within the last 7 days will be eligible for a weekly lottery. The lottery winner gets a percentage of the total pool amount.


# Example Workflows
* As a partner I want to register on Nebula so that my customers can be rewarded with loyalty ETH.
* As a customer I want to earn ETH based on my purchases with partners so that I can be financially rewarded for my loyalty.
* As a customer I want to swap the lotalty value I have earned for DAI so that I can use it to fit my needs when the time comes.
* As a customer I want to take part in weekly lottery so that I can get more value for shopping at partner stores or websites.
* As a partner I want to sponsor a weekly lottery amount so that I can make customers come to my store or website.

# Live Deployed Site
https://mampudi.github.io/blockchain-developer-bootcamp-final-project/#

# Screencast Link
https://www.youtube.com/watch?v=IpRLE7yTSls&ab_channel=0xMampudi

# Requirements

* Node.js >= v14.0
* Metamask Wallet installed in the browser

## Installation
1. Install truffle

```bash
npm install truffle -g
```
2. Clone this repository and cd into the folder:

```bash
git clone https://github.com/mampudi/blockchain-developer-bootcamp-final-project.git
cd blockchain-developer-bootcamp-final-project
npm install
```

## Test
The local testnet should be running on 8545
```bash
truffle test
```

## Deploy

> :warning: When pushing your code to Github, make sure that your **MNEMONIC**, **RPC_URL** and **MUMBAI_RPC_URL** are stored in a **.env** file and it is also in your **.gitignore**

For deploying to the kovan network, Truffle will use `truffle-hdwallet-provider` for your mnemonic and an RPC URL. Set your environment variables `$RPC_URL`, `$MUMBAI_RPC_URL` and `$MNEMONIC` before running:

```bash
truffle migrate --network kovan --reset
```

### Local Blockchain

> :warning: Without a Chainlink node deployed locally, requests from smart contracts will not be responded to. We recommend you deploy to the Kovan network

If needed, edit the `truffle-config.js` config file to set the desired network to a different port. It assumes any network is running the RPC port on 8545.

In vsCode use open with live server to run /docs/index.html

```bash
truffle migrate --network local
```

## Public Wallet Address for Certification
0xE816d7fB61c03997157a916DC0B0a9a8101958Ce
