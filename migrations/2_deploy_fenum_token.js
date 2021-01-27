const FenumToken = artifacts.require('FenumToken');



module.exports = async function (deployer, network, accounts) {
  const args = [];
  await deployer.deploy(FenumToken, ...args);
};
