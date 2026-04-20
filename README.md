<img width="1457" height="1027" alt="image" src="https://github.com/user-attachments/assets/f72c8268-bbd8-4042-8e45-22ef4bd5ec76" />







<img width="1512" height="1061" alt="image" src="https://github.com/user-attachments/assets/b2e4249f-3bb3-4aa3-9a2f-2b97e3ffd578" />


# Global LogiTrack - Digital Product Passport System

Global LogiTrack is a full-stack decentralized application for issuing and verifying digital product passports. It combines a premium React dashboard, an Ethereum Sepolia smart contract, secure IPFS certificate storage through Pinata, QR-based verification, and a lightweight Node.js upload gateway to keep Pinata credentials off the frontend.

## Stack

- React + Vite + Tailwind CSS
- Solidity smart contract for Ethereum Sepolia
- ethers.js for wallet and contract interactions
- IPFS storage via Pinata
- Express + Multer backend for secure file uploads

## Features

- MetaMask wallet connection with Sepolia network enforcement
- `LogiTrack` smart contract with auto-incrementing tracking IDs starting at `1000`
- Admin registration flow:
  - Enter product name and origin
  - Upload certificate to IPFS through backend API
  - Register product on-chain
  - Show CID, tracking ID, transaction hash, and Etherscan link
- Verification flow:
  - Search by tracking ID
  - Fetch product metadata from blockchain
  - View or download certificate from IPFS
- QR code generation for direct verification links
- Local recent products panel
- Copy-to-clipboard actions, toasts, loading states, and responsive futuristic UI

## Project Structure

```text
.
├── contracts/
│   └── LogiTrack.sol
├── server/
│   └── index.js
├── src/
│   ├── components/
│   ├── contracts/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── config.js
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Environment Setup

Create a `.env` file in the project root:

```env
VITE_CONTRACT_ADDRESS=0xYourSepoliaContractAddress
VITE_SEPOLIA_CHAIN_ID=11155111
VITE_APP_URL=http://localhost:5173
PINATA_JWT=your_pinata_jwt
PORT=3001
```

Notes:

- Use a Pinata JWT instead of exposing a secret key in frontend code.
- `VITE_CONTRACT_ADDRESS` is read by the React app after you deploy the contract.
- `VITE_APP_URL` is used by the backend CORS configuration and QR/share links.

## Install and Run

Install dependencies:

```bash
npm install
```

Start frontend and backend together:

```bash
npm run dev
```

The app will be available at:

- Frontend: `http://localhost:5173`
- Backend upload API: `http://localhost:3001`

Create a production build:

```bash
npm run build
```

## Smart Contract Deployment with Remix + Sepolia

1. Open [Remix](https://remix.ethereum.org/).
2. Create a new file named `LogiTrack.sol`.
3. Paste the contract from [contracts/LogiTrack.sol](C:/Users/M CHINMAYA SASTRY/OneDrive/ドキュメント/Playground/contracts/LogiTrack.sol).
4. Compile with Solidity `0.8.20` or newer in the `0.8.x` range.
5. In the Deploy tab:
   - Environment: `Injected Provider - MetaMask`
   - Network: `Sepolia`
6. Deploy the contract and confirm the MetaMask transaction.
7. Copy the deployed contract address into your `.env` as `VITE_CONTRACT_ADDRESS`.
8. Restart the dev server after updating `.env`.

## Contract Interface

The contract exposes:

- `registerProduct(string name, string origin, string cid)`
- `getProduct(uint256 trackingID)`
- `getCurrentTrackingID()`
- `productExists(uint256 trackingID)`

Tracking IDs begin at `1000` and increment for each product registration.

## End-to-End Flow

1. Connect MetaMask and confirm Sepolia is selected.
2. In the Register card:
   - Enter product name
   - Enter origin
   - Upload a certificate file
3. The backend uploads the file to Pinata and returns a CID.
4. The frontend submits `registerProduct(name, origin, cid)` to the smart contract.
5. After confirmation, the UI shows:
   - Product name
   - Origin
   - CID
   - Tracking ID
   - Transaction hash
   - Etherscan link
   - Verification QR code
6. Users can verify any product by entering the tracking ID in the Track panel.

## Security Notes

- Pinata credentials are only used on the backend route at `POST /api/upload`.
- The frontend never stores or exposes a Pinata secret.
- MetaMask and network validation are handled before write transactions.
- Transaction rejection, upload failures, missing MetaMask, and missing contract configuration all surface user-friendly errors.

## Important Verification Notes

- The recent products list is stored in browser local storage, so it reflects registrations from the current browser unless you later add event indexing.
- The verification panel reads directly from the blockchain, so any valid tracking ID can still be checked globally.
- Sepolia ETH is required in MetaMask to register products because blockchain writes cost gas.

## Suggested Next Enhancements

- Add role-based admin controls
- Index `ProductRegistered` events for a network-wide recent activity feed
- Support metadata JSON alongside certificate uploads
- Add automated contract deployment with Hardhat or Foundry
