import Link from "next/link";
import Image from "next/image";
import { useNetwork } from "wagmi";

import bscLogo from "../assets/images/bsc-logo.png";

const ChainName = () => {
  const { chain } = useNetwork();
  return (
    <Link
      href="#"
      className="flex items-center bg-offwhite py-2 px-6 rounded-xl mr-6"
    >
      <Image src={bscLogo} alt="BSC logo" width={24} height={24} />
      <span className="font-bold ml-2">{chain?.name}</span>
    </Link>
  );
};

export default ChainName;
