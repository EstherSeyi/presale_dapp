import dynamic from "next/dynamic";

import BuyForm from "../src/components/BuyForm";

const ViewBalance = dynamic(() => import("../src/components/ViewBalance"), {
  ssr: false,
});
const timeline = [
  "Sale Pending",
  "Sale Live",
  "Sale Completed",
  "Vesting Started",
  "EXX Launched",
];

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row  mt-20">
      <div className="md:basis-7/12 md:mr-4">
        <div className="mb-9">
          <h1 className="font-spacegrotesk text-7xl mb-4">Be an early bird</h1>
          <p className="text-grey_03 text-base">
            It would take months before official project launch, so you should
            buy only if you can wait for the launch to trade your coins.
          </p>
        </div>
        <ul className="hidden md:block">
          {timeline.map((label, index) => {
            return (
              <li key={label} className="stepper-row">
                <div className="dot-container">
                  <div className="dot"></div>
                  {index === 0 && <div className="shade"></div>}
                </div>
                <p>{label}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:basis-5/12 md:ml-4">
        <ViewBalance />
        <div className="bg-white rounded-xl p-5 mb-4 md:mb-0">
          <div className="flex justify-between mb-9">
            <span className="font-spacegrotesk text-lg">10:20:30</span>
            <button className="bg-yellow text-xs px-4 py-2 rounded-2xl font-bold">
              Pending
            </button>
          </div>
          <div className="mb-8">
            <p className="text-sm text-grey_04 mb-3">Sale progress</p>

            <div className="w-full bg-blue_04 rounded-full h-2.5">
              <div className="bg-blue_01 h-2.5 rounded-full w-[45%]"></div>
            </div>
          </div>

          <BuyForm />

          <div>
            <h2 className="font-bold mb-2">Disclaimer</h2>
            <p className="text-xs text-grey_03">
              The information provided shall not in any way constitute a
              recommendation as to whether you should invest in any product
              discussed.{" "}
              <span className="text-black">
                We accept no liability for any loss
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
