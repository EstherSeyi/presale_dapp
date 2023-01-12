import { useBalance, useAccount } from "wagmi";

const ViewBalance = () => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({
    address: address,
    token: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
  });
  return (
    <div className="hidden md:block bg-offwhite py-3 px-4 max-w-fit rounded-lg mb-4">
      <span className="text-xs text-blue_01 font-bold">
        Your bal: {isLoading ? "..." : data?.formatted ?? "0.00"} {data?.symbol}
      </span>
    </div>
  );
};

export default ViewBalance;
