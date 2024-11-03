import { getDefaultConfig, Chain } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

const localChain: Chain = {
  id: 31337, //hardhat node chain
  name: "localhost:8545",
  nativeCurrency: {
    name: "Local ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["http://localhost:8545"] },
  },
  testnet: true,
};

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [localChain, mainnet, sepolia],
  ssr: true,
});
