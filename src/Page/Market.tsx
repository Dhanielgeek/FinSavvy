import TradingViewWidget from "../Components/Tradingviewone";
import Tradingviewtwo from "../Components/Tradingviewtwo";

const Market = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center">
      <div className="w-[94%] h-[2rem] flex justify-start items-center">
        <p className="font-semibold text-lg">Personal Trading Chart</p>
      </div>
      <div className="w-[94%] h-[30rem] flex justify-center items-center">
        <TradingViewWidget />
      </div>
      <div className="w-[94%] h-[2rem] flex justify-start items-center">
        <p className="font-semibold text-lg">Market Cap</p>
      </div>
      <div className="w-[94%] h-[30rem] flex justify-center items-center">
        <Tradingviewtwo />
      </div>
    </div>
  );
};

export default Market;
