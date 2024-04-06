import "@/styles/globals.css";
import {
  polygonMumbai,
  bscTestnet,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  pulsechain,
  goerli,
} from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygonMumbai,bscTestnet, mainnet, polygon, optimism, arbitrum, pulsechain, goerli],
  [
    publicProvider(),
    // InfuraProvider({apiKey :'0e685a9339ed4a6995897c523c097a00'})
  ]
);

const { connectors } = getDefaultWallets({
  appName: "photo-NFT",
  projectId: "6ad34b68ab5f973a8696e8cd2ed059dc",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
