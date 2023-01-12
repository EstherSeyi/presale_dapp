import Link from "next/link";
import Image from "next/image";
import { useNetwork } from "wagmi";

const ChainName = () => {
  const { chain } = useNetwork();

  return (
    <Link
      href="#"
      className="flex items-center bg-offwhite py-2 px-6 rounded-xl mr-6"
    >
      <Image
        src="https://res.cloudinary.com/estherseyi/image/upload/v1673559071/v9uuttf6j8mia498msey.png"
        alt="BSC logo"
        width={24}
        height={24}
      />
      <span className="font-bold ml-2">{chain?.name}</span>
    </Link>
  );
};

export default ChainName;
