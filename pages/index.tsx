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
          <li>Sale Pending</li>
          <li>Sale Live</li>
          <li>Sale Completed</li>
          <li>Vesting Started</li>
          <li>EXX Launched</li>
        </ul>
      </div>
      <div className="md:basis-5/12 md:ml-4">
        <div className="hidden md:block bg-offwhite py-3 px-4 max-w-fit rounded-lg mb-4">
          <span className="text-xs text-blue_01 font-bold">
            Your bal: 0.0000034 USDT
          </span>
        </div>
        <div className="bg-white rounded-xl p-5">
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
          <form>
            <label className="font-spacegrotesk ">Enter Amount to buy</label>
            <div className="mt-2">
              <div className="flex justify-between">
                <input
                  placeholder="00.00 USDT"
                  className="border border-blue_02 rounded-lg py-2 pl-1.5 text-black mr-3 flex-grow"
                />
                <button className="bg-blue_01 text-white py-2 px-5 rounded-lg font-bold">
                  Buy
                </button>
              </div>
            </div>
            <p className="text-sm mb-8 mt-1">
              <span className="text-grey_03 mr-4">
                Min. Buy:{" "}
                <span className="text-black font-medium font-dmsans">
                  30 USDT
                </span>
              </span>

              <span className="text-grey_03">
                Max. Buy:{" "}
                <span className="text-black font-medium font-dmsans">
                  10,000 USDT
                </span>
              </span>
            </p>
          </form>

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
