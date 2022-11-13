require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://serene-wild-owl.ethereum-goerli.discover.quiknode.pro/febd26c4e3322cf276a49dda6d81c7e9085f6201/",
      accounts: [
        "f44797daee81511f1e72860c3d2cd567875b571cbdb3750fd1a1117ced7aeae1",
      ],
    },
  },
};
