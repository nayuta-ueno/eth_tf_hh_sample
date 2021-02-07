const TestSol1 = artifacts.require("TestSol1");
const TestSol2 = artifacts.require("TestSol2");

module.exports = async function (deployer) {
    await deployer.deploy(TestSol1, TestSol2.address);
    console.log('TestSol1 = ' + TestSol1.address);
};
