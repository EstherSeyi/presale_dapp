import { getContract } from "../helpers/contract";
import presaleAbi from "../abis/presale.json";
import { ethers } from "ethers";
import { getProvider } from "@wagmi/core";

export const presaleContract = () => {
  const provider = getProvider();
  const walletFromPKey = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY!
  );

  const signer = walletFromPKey.connect(provider);
  const contract = getContract(
    "0xDA497727316FBDD71D2b555041035c6641c0D85F",
    presaleAbi,
    signer
  );

  return contract;
};
