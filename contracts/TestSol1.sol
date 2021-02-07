// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.0 <0.8.0;

import "./TestSol2.sol";

contract TestSol1 {
    TestSol2 _sol2;
    constructor(TestSol2 sol) public {
        _sol2 = sol;
    }

    function calc(uint256 val) public view returns (uint256) {
        return _sol2.getValue() * val;
    }
}
