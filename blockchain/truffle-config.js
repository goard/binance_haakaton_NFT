const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
// .secret file mnemonic phraze your wallet browser
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      //host: "15.165.82.162",
      port: 8545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {
    //
  },
  compilers: {
    solc: {
      version: "0.6.2", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
