// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.0 <0.8.0;

contract TestSol2 {
    uint256 _value;

    constructor(uint256 value) public {
        _value = value;
    }

    function setValue(uint256 value) public {
        _value = value;
    }

    function getValue() public view returns (uint256) {
        return _value;
    }
}
