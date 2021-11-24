const Nebula = artifacts.require("Nebula");

module.exports = function (deployer) {
  deployer.deploy(Nebula);
};