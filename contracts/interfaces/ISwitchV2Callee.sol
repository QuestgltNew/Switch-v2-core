pragma solidity >=0.5.0;

interface ISwitchV2Callee {
    function switchV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
