const TestSol1 = artifacts.require("TestSol1");
const TestSol2 = artifacts.require("TestSol2");

module.exports = async function () {
    const sol2 = await TestSol2.new(123);
    TestSol2.setAsDeployed(sol2);
    console.log('TestSol2 = ' + sol2.address);

    const sol1 = await TestSol1.new(sol2.address);
    TestSol1.setAsDeployed(sol1);
    console.log('TestSol1 = ' + sol1.address);
};
