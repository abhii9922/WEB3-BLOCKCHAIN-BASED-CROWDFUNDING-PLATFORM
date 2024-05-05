# Web3 Blockchain Based Crowd Funding Platform

![image](https://github.com/abhii9922/WEB3-BLOCKCHAIN-BASED-CROWDFUNDING-PLATFORM/blob/main/client/src/assets/CrowdFunding.png)

Join the future of fundraising with our innovative Web3 community-based crowdfunding platform! Experience the power of blockchain transactions, where transparency and security come together to revolutionize the way you support projects. Be part of a global community that connects creators and backers seamlessly, ensuring trust and accountability at every step. Empower ideas, fuel dreams, and reshape crowdfunding on a platform designed for the modern era.

## Getting Started

Create a client side using this example:

```bash
npx thirdweb create --template vite-javascript-starter
```

You can start editing the page by modifying `src/main.jsx`. The page auto-updates as you edit the file.

On `src/index.jsx`, you'll find our `ThirdwebProvider` wrapping your app,
this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

Create a contracts using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deployment

To deploy this project, follow the following. -


#### Install Dependencies:

After creating the `.env` file, follow these steps to install dependencies and deploy the smart contract.

1. Navigate to the `client` directory and the `web3` directory using the command line.

   ```bash
   cd client
   ```

   ```bash
   cd web3
   ```

2. In both the `client` and `web3` directories, run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

#### Deploy the Smart Contract:

1. In the `web3` directory, run the following command to deploy the smart contract:

   ```bash
   npm run deploy
   ```

   Ensure your MetaMask private key is correctly configured in the `.env` file to sign the deployment transaction.

   Follow the link that appears in the terminal and deploy the contract in the desired network. (Polygon or Ethereum).

   The deployment process will provide you with the contract address once it's successfully deployed.

#### Update the Values:

Once the smart contract is deployed and you have the contract address:

1. Open the `client` directory.

2. Locate the relevant file where the contract address is being used.

3. Update the contract address in the file with the address of the deployed smart contract on the third web.
   https://github.com/abhii9922/WEB3-BLOCKCHAIN-BASED-CROWDFUNDING-PLATFORM/blob/main/client/src/context/index.jsx#L10

4. Update the Client ID in the file with the API keys of the deployed smart contract on the third web.
   https://github.com/abhii9922/WEB3-BLOCKCHAIN-BASED-CROWDFUNDING-PLATFORM/blob/main/client/src/main.jsx#L15

