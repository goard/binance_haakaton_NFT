import Web3 from "web3";
import contract from "./contract";

// const NETWORK_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
// const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_URL));
const web3 = new Web3(window.web3.currentProvider);
const metamask = window.ethereum;
console.log(metamask.selectedAddress);

const MemeMarketplace = new web3.eth.Contract(contract.abi, contract.address, {
  from: metamask.selectedAddress,
});

export const awardMemeToken = (address, tokenMetadata, callback) => {
  console.log("address", address);
  console.log(tokenMetadata);
  console.log("selectedaddress", metamask.address);
  let data = MemeMarketplace.methods
    .awardMemeToken(address, tokenMetadata)
    .encodeABI();
  web3.eth.sendTransaction(
    {
      from: metamask.selectedAddress,
      to: contract.address,
      data: data,
      // value:
      // gas: '1000000',
    },
    function (receipt) {
      callback(null, receipt);
    }
  );
};

export const getTokenOwner = (tokenId) => {
  return new Promise((resolve, reject) => {
    let data = MemeMarketplace.methods.ownerOf(tokenId).encodeABI();

    web3.eth
      .call({
        from: metamask.selectedAddress,
        to: contract.address,
        data: data,
      })
      .then((receipt) => {
        let res = web3.eth.abi.decodeParameters(["address"], receipt);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTokenMetadata = (tokenId) => {
  return new Promise((resolve, reject) => {
    let data = MemeMarketplace.methods.tokenURI(tokenId).encodeABI();
    web3.eth
      .call({
        from: metamask.selectedAddress,
        to: contract.address,
        data: data,
      })
      .then((receipt) => {
        let res = web3.eth.abi.decodeParameters(["string"], receipt);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTotalSupply = () => {
  return new Promise((resolve, reject) => {
    let data = MemeMarketplace.methods.totalSupply().encodeABI();
    web3.eth
      .call({
        from: metamask.selectedAddress,
        to: contract.address,
        data: data,
      })
      .then((receipt) => {
        let res = web3.eth.abi.decodeParameters(["uint256"], receipt);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
