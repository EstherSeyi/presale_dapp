import { z, ZodError } from "zod";
import { useState } from "react";
import BigNumber from "bignumber.js";
import { useAccount, useDisconnect } from "wagmi";
import toast from "react-hot-toast";

import { presaleContract } from "../custom-hooks/contracts";
export function fromTokenAmount(
  amount: BigNumber | number | string,
  decimals: number
): BigNumber {
  return new BigNumber(amount).times(
    new BigNumber(10).exponentiatedBy(decimals)
  );
}

const buySchema = z.object({
  amount: z.string().refine(
    (val) => {
      const amtBN = new BigNumber(val);
      return amtBN.isGreaterThan(0);
    },
    {
      message: "Please enter a valid USDT amount!",
    }
  ),
});

const BuyForm = () => {
  const { address } = useAccount();
  const [values, setValues] = useState({
    amount: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<{
    amount: string[] | null;
  }>({ amount: null });

  const contract = presaleContract();

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      buySchema.parse({
        amount: values.amount.toString(),
      });
      const txn = await contract
        .connect(address!)
        .buy({ value: fromTokenAmount(values.amount, 18).toFixed(0) });
      await txn.wait();
      setIsLoading(false);
      setValues({ amount: "" });
      toast.success("Successful Buy!");
      console.log(txn, "got here");
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ZodError) {
        toast.error("Invalid Input!");
        const errors = error?.flatten()?.fieldErrors as any;
        return setValidationError(errors);
      }
      toast.error(
        `Most probably the Contract: ${
          (error as { reason: string })?.reason ?? ""
        }`
      );
      console.log({ error });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="font-spacegrotesk ">Enter Amount to buy</label>
      <div className="mt-2">
        <div>
          <div className="flex justify-between">
            <input
              value={values.amount.toString()}
              onChange={(e) => {
                if (validationError?.amount)
                  setValidationError({ amount: null });
                setValues((prevState) => ({
                  ...prevState,
                  amount: e.target.value,
                }));
              }}
              placeholder="00.00 USDT"
              className="border border-blue_02 rounded-lg py-2 pl-1.5 text-black mr-3 flex-grow"
            />
            <button
              type="submit"
              className="bg-blue_01 text-white py-2 px-5 rounded-lg font-bold disabled:opacity-80"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Buy"}
            </button>
          </div>
          {validationError?.amount?.length ? (
            <span className="text-xs text-[red]">
              {validationError?.amount[0]}
            </span>
          ) : null}
        </div>
      </div>
      <p className="text-sm mb-8 mt-1">
        <span className="text-grey_03 mr-4">
          Min. Buy:{" "}
          <span className="text-black font-medium font-dmsans">30 USDT</span>
        </span>

        <span className="text-grey_03">
          Max. Buy:{" "}
          <span className="text-black font-medium font-dmsans">
            10,000 USDT
          </span>
        </span>
      </p>
    </form>
  );
};

export default BuyForm;
