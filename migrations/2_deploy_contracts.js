//var SimpleBank = artifacts.require("./SimpleBank.sol");
var Nebula = artifacts.require("./Nebula.sol");

module.exports = function(deployer) {
  deployer.deploy(Nebula);
};
