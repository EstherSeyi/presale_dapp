import { useConnectWallet } from "../custom-hooks/wallet";

import WalletIcon from "../assets/icons/wallet.svg";

const SSConnectWallet = () => {
  const { onOpen, loading, disconnect, address, isConnected } =
    useConnectWallet();
  return (
    <button
      className="p-1 border border-grey_05 rounded-lg bg-blue_03 mr-4"
      onClick={!isConnected ? () => disconnect() : onOpen}
      disabled={loading}
    >
      <WalletIcon className="h-5 w-5" />
    </button>
  );
};

export default SSConnectWallet;
