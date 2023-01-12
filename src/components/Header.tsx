import Link from "next/link";
import dynamic from "next/dynamic";

import DownloadIcom from "../../public/assets/icons/download.svg";
import MenuIcon from "../../public/assets/icons/menu.svg";

const ChainName = dynamic(() => import("./ChainName"), {
  ssr: false,
});
const ConnectWallet = dynamic(() => import("./ConnectWallet"), {
  ssr: false,
});
const SSConnectWallet = dynamic(() => import("./SSConnectWallet"), {
  ssr: false,
});

const Header = () => {
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
        <ChainName />

        <ConnectWallet />
      </div>

      <div className="flex md:hidden items-center">
        <SSConnectWallet />
        <button>
          <MenuIcon className="h-5 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
