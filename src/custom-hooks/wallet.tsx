import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { useState } from "react";

export const useConnectWallet = () => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  async function onOpen() {
    setLoading(true);
    await open({ route: "SelectNetwork" });
    setLoading(false);
  }

  return {
    onOpen,
    loading,
    disconnect,
    address,
    isConnected,
  };
};
