import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import { dmsans, spacegrotesk } from "../styles/fonts";
import "../styles/globals.css";
import "../styles/timeline.scss";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { bscTestnet } from "wagmi/chains";

const chains = [bscTestnet];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID! }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --spacegrotesk-font: ${spacegrotesk.style.fontFamily};
          --dmsans-font: ${dmsans.style.fontFamily};
        }
      `}</style>
      <WagmiConfig client={wagmiClient}>
        <main className="min-h-screen bg-custom mix-blend-color bg-opacity-78 relative pb-16">
          <section className="w-11/12 sm:w-10/12 mx-auto max-w-7xl pt-8 opacity-100">
            <Header />
            <Component {...pageProps} />
          </section>
          <Footer />
        </main>
        <Toaster />
        <Web3Modal
          projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </>
  );
}
