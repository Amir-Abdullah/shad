const { ethers } = require('ethers');

// Generate a random wallet
const wallet = ethers.Wallet.createRandom();

console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);
// Address: 0x540357f117c5DF9682766DfCe34Df22a8FdD3FA3
// Private Key: 0x5b6993373d629d607181454c77df282bf204f3fdf6b8ffb531c5356626943a89