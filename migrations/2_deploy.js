const SwitchERC20 = artifacts.require('SwitchV2ERC20.sol');
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');
//const SwitchToken = artifacts.require('SwitchToken.sol');
const Factory = artifacts.require('SwitchV2Factory.sol');

module.exports = async function (deployer, _network, addresses) {


  await deployer.deploy(Token1);
  await deployer.deploy(Token2);
  await deployer.deploy(SwitchERC20);
  const token1 = await Token1.deployed();
  const token2 = await Token2.deployed();
  const switchToken = await SwitchERC20.deployed();
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();
  await factory.createPair(token1.address, token2.address);
};
