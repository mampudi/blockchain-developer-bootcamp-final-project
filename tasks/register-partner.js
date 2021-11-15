
task("register-partner", "Registers a partner")
  .addParam("contract", "The address of the deployed contract")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const Nebula = await ethers.getContractFactory("Nebula");
    //Get signer information
    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    const nebula = new ethers.Contract(contractAddr, Nebula.interface, signer)
    var result = await nebula.registerPartner(accounts[1].address);

    console.log(nebula._sNumberOfPartners);
    console.log("Contract ", contractAddr, " register partner successfully called. Transaction Result: :", result);
  });

  task("register-partner-test", "Registers a partner")
  .addParam("contract", "The address of the deployed contract")
  .setAction(async (taskArgs) => {


    console.log("test");
  });

module.exports = {};