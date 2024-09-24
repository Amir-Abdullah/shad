const TronWeb = require("tronweb");
// Create a new TronWeb instance without a private key
const tronWeb = new TronWeb({
  fullHost: "https://api.shasta.trongrid.io",
});

// Generate a new private key and wallet address
const newAccount = tronWeb.createAccount().then((account) => {
  console.log("Private Key:", account.privateKey);
  console.log("Address:", account.address.base58);
});

console.log(newAccount);
// Private Key: 6871EEFBCED57D0B0D05701D048D6148AC219395C5E377186AAC2A2035649383
// Address: TWiy8R8o8MakDXnPFRbnjJxSgRKmQLpBoW