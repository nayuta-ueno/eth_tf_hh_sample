const TestSol2 = artifacts.require("TestSol2");

module.exports = async function (deployer) {
    await deployer.deploy(TestSol2, 123);
    console.log('TestSol2 = ' + TestSol2.address);
};
