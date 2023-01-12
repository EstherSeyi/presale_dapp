import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import ArrowIcon from "../assets/icons/connect-arrow.svg";
import { useState } from "react";

const shortAddress = (address: string) => {
  return address
    ? address.slice(0, 8) +
        "..." +
        address.slice(address.length - 8, address.length)
    : "";
};

const ConnectWallet = () => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  async function onOpen() {
    setLoading(true);
    await open({ route: "SelectNetwork" });
    setLoading(false);
  }

  return (
    <>
      {isConnected ? (
        <>
          <button
            id="props-basic"
            className="py-2 px-6 border-blue_02 border rounded-lg hover:border-2 focus:border-2 transition-all focus:outline-none"
          >
            <span>{shortAddress(address ?? "")}</span>
          </button>
          <Tooltip
            className="bg-white text-black"
            events={["hover"]}
            anchorId="props-basic"
            delayHide={3000000}
            variant="light"
            wrapper="button"
            clickable={true}
          >
            <span
              className="font-bold hover:underline focus:underline transition-all focus:outline-none cursor-pointer"
              onClick={() => disconnect()}
            >
              Disconnect
            </span>
          </Tooltip>
        </>
      ) : (
        <button
          onClick={onOpen}
          disabled={loading}
          className="py-3 px-6 border-blue_02 border rounded-lg bg-blue_01 flex items-center"
        >
          <span className="text-white font-bold">Connect Wallet</span>
          <ArrowIcon className="h-2 w-2 ml-4" />
        </button>
      )}
    </>
  );
};

export default ConnectWallet;
