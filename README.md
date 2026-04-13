# Art NFT Mint

A [Next.js](https://nextjs.org/) front end for minting art NFTs on-chain. Users connect a wallet, enter an image URL and artwork name, and call the `mint` function on the deployed **ArtNFT** ERC-721 contract.

## Features

- Wallet connection via [RainbowKit](https://www.rainbowkit.com/) and [Wagmi](https://wagmi.sh/)
- Mint UI with art URL and name inputs
- Solidity contract (`contract/ArtNFT.sol`) using OpenZeppelin `ERC721`

## Prerequisites

- Node.js 18+ (recommended for Next.js 14)
- A wallet with funds on the network where the contract is deployed
- A deployed `ArtNFT` contract and matching ABI/address in the repo

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page loads the header and **Art Mint** form (`src/pages/NFTMint.js`).

Other scripts:

```bash
npm run build   # production build
npm run start   # run production server (after build)
npm run lint    # Next.js ESLint
```

## Contract configuration

The app reads the contract ABI and address from `contract/abi.json`. After you deploy `contract/ArtNFT.sol`, update that file with:

- `abi` — compiled ABI for `ArtNFT`
- `contractAddress` — deployed contract address

The mint UI switches and validates against the chain ID hard-coded in `src/pages/NFTMint.js` (must match your deployed contract—for example Polygon Mumbai is `80001`). Update that file and the `configureChains` list in `src/pages/_app.js` if you use a different network.

## Project layout

| Path | Purpose |
|------|--------|
| `src/pages/` | Next.js pages (`index.js`, `NFTMint.js`, `_app.js`) |
| `src/components/` | UI (e.g. header, connect button) |
| `contract/ArtNFT.sol` | NFT contract source |
| `contract/abi.json` | ABI + `contractAddress` for the app |

## Tech stack

- **Next.js** 14, **React** 18, **Tailwind CSS**
- **Wagmi** v1, **viem**, **RainbowKit** for Web3
- **ethers** v6 and **web3** v4 (used in the mint flow)

## Deploying the app

You can deploy like any Next.js app (e.g. [Vercel](https://vercel.com/docs/frameworks/nextjs)). Ensure environment-specific contract addresses and chain configuration match your deployment target.

## License

See the repository license if one is provided; the Solidity file uses `SPDX-License-Identifier: MIT`.
