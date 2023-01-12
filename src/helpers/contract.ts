import { ethers } from "ethers";

export const getContract = (
  address: string,
  abi: any,
  wallet: ethers.Wallet
) => {
  const contract = new ethers.Contract(address, abi, wallet);
  return contract;
};
