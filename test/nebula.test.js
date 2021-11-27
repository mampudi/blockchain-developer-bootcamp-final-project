const { catchRevert } = require("./exceptionsHelpers.js");
var Nebula = artifacts.require("./Nebula.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Nebula", function (accounts) {

  const [contractOwner, madtrix, mampudi, horus] = accounts;
  const deposit = web3.utils.toBN(1 * 10 ** 18);
  const customerRegistrationdeposit = 0.01 * 10 ** 18;
  const customerRegistrationFee = 0.1 * 10 ** 18;

  beforeEach(async () => {
    instance = await Nebula.new();
  });

  it("ready to be solved!", async() => {
    const eth100 = 100e18;
    assert.equal(await web3.eth.getBalance(madtrix), eth100.toString());
  });

  it("should assert true", async function () {
    await Nebula.deployed();
    return assert.isTrue(true);
  });
  
  it("is owned by owner", async () => {
    assert.equal(
      await instance._sOwner.call(),
      contractOwner,
      "owner is not correct",
    );
  });

  it("should mark partner as registered", async () => {
    await instance.registerPartner({ from: madtrix, value: deposit  });
    assert.equal(await instance.partnerRegistered(madtrix),true);
  });

  it("should register customer", async () => {
    await instance.registerPartner({ from: madtrix, value: deposit  });
    await instance.registerCustomer(mampudi,{ from: madtrix, value: customerRegistrationFee});
    assert.equal(
      await instance._sNumberOfCustomers.call(),
      1,
      "number of customers is not correct",
    );

  });

  it("should not register customer bacause partner is not registered", async () => {
    await catchRevert(instance.registerCustomer(mampudi,{ from: madtrix, value: customerRegistrationdeposit}));

  });

  it("should not register customer bacause of insuffcient registration fee", async () => {
    await instance.registerPartner({ from: madtrix, value: deposit  });
    await catchRevert(instance.registerCustomer(mampudi,{ from: madtrix, value: customerRegistrationdeposit}));

  });

});
