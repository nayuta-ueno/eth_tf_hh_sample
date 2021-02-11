const TestSol2 = artifacts.require("TestSol2");

function getEpoch() {
    return Math.floor(Date.now() / 1000);
}

contract("test", async accounts => {
    it("test1", async () => {
        const instance = await TestSol2.deployed();
        const tm1 = await instance.getTimeStamp();
        const ep1 = getEpoch();
        await instance.setValue(0);
        const tm2 = await instance.getTimeStamp();
        const ep2 = getEpoch();
        console.log('tm1=' + tm1 + ', tm2=' + tm2);
        console.log('ep1=' + ep1 + ', ep2=' + ep2);
    });

    it("test2", async () => {
        const instance = await TestSol2.deployed();
        const tm1 = await instance.getTimeStamp();
        const ep1 = getEpoch();
        await instance.setValue(0);
        const tm2 = await instance.getTimeStamp();
        const ep2 = getEpoch();
        console.log('tm1=' + tm1 + ', tm2=' + tm2);
        console.log('ep1=' + ep1 + ', ep2=' + ep2);
    });

    it("test3", async () => {
        const instance = await TestSol2.deployed();
        const tm1 = await instance.getTimeStamp();
        const ep1 = getEpoch();
        await instance.setValue(0);
        const tm2 = await instance.getTimeStamp();
        const ep2 = getEpoch();
        console.log('tm1=' + tm1 + ', tm2=' + tm2);
        console.log('ep1=' + ep1 + ', ep2=' + ep2);
    });
});
