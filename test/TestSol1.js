const TestSol1 = artifacts.require("TestSol1");

contract("test", async accounts => {
    it("test", async () => {
        const instance = await TestSol1.deployed();
        assert.equal(await instance.calc(2), 246, "calc");
    });
});
