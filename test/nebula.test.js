var Nebula = artifacts.require("./Nebula.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Nebula", function (accounts) {

  const [contractOwner, madtrix] = accounts;
  const deposit = web3.utils.toBN(2);

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
});
