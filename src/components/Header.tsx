import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
// import { useNetwork } from "wagmi";

import DownloadIcom from "../assets/icons/download.svg";
import WalletIcon from "../assets/icons/wallet.svg";
import MenuIcon from "../assets/icons/menu.svg";
import bscLogo from "../assets/images/bsc-logo.png";

const ConnectWallet = dynamic(() => import("./ConnectWallet"), {
  ssr: false,
});

const Header = () => {
  // const { chain } = useNetwork();

  // console.log({ chain });
  return (
    <header className="text-sm flex justify-between items-center pb-8">
      <div>
        <Link
          href="/"
          className="font-spacegrotesk font-bold text-logoblue text-[1.5rem]"
        >
          EXX
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <Link href="#" className="flex mr-6">
          <DownloadIcom className="text-blue_01 w-4 h-4 mr-1" />
          <span>Download Tokenomics</span>
        </Link>
        <Link
          href="#"
          className="flex items-center bg-offwhite py-2 px-6 rounded-xl mr-6"
        >
          <Image src={bscLogo} alt="BSC logo" width={24} height={24} />
          <span className="font-bold ml-2">BSC Mainnet</span>
        </Link>

        <ConnectWallet />
      </div>

      <div className="flex md:hidden items-center">
        <button
          className="p-1 border border-grey_05 rounded-lg bg-blue_03 mr-4"
          // onClick={onOpen}
          // disabled={loading}
        >
          <WalletIcon className="h-5 w-5" />
        </button>
        <button>
          <MenuIcon className="h-5 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
