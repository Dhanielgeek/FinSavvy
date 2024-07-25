import { IoMdAdd } from "react-icons/io";
import { MdModeEdit, MdOutlineClear } from "react-icons/md";

const plans = [
  {
    name: "Starter Plan",
    totalAmount: 5000,
    minDeposit: 1000,
    maxDeposit: 5000,
    minReturn: 4000,
    maxReturn: 2000,
    bonus: 450,
    duration: "30 Days",
  },
  {
    name: "Basic Plan",
    totalAmount: 15000,
    minDeposit: 5000,
    maxDeposit: 15000,
    minReturn: 35000,
    maxReturn: 10500,
    bonus: 900,
    duration: "30 Days",
  },
  {
    name: "Silver Plan",
    totalAmount: 30000,
    minDeposit: 15000,
    maxDeposit: 30000,
    minReturn: 150000,
    maxReturn: 30000,
    bonus: 1800,
    duration: "30 Days",
  },
  {
    name: "Platinum Plan",
    totalAmount: 50000,
    minDeposit: 30000,
    maxDeposit: 50000,
    minReturn: 390000,
    maxReturn: 650000,
    bonus: 3600,
    duration: "30 Days",
  },
  {
    name: "Master Plan",
    totalAmount: 1000000,
    minDeposit: 50000,
    maxDeposit: 1000000,
    minReturn: 800000,
    maxReturn: 16000000,
    bonus: 7200,
    duration: "30 Days",
  },
  {
    name: "Ultimate Plan",
    totalAmount: 1500000,
    minDeposit: 1000000,
    maxDeposit: 500000,
    minReturn: 90000,
    maxReturn: 20000000,
    bonus: 9800,
    duration: "30 Days",
  },
];

const InvestmentPack = () => {
  return (
    <div className="w-full h-full scrollbar overflow-y-scroll">
      <div className="w-full h-[28%] flex justify-start items-center">
        <div className="w-[30%] h-[80%] flex justify-center gap-4 flex-col items-start px-4 max-md:w-[90%]">
          <p className="font-semibold text-2xl">System Plans</p>
          <button className="w-[40%] h-[40%] bg-[#050C1B] rounded-md text-white flex font-semibold justify-center items-center gap-2">
            <IoMdAdd /> New Plan
          </button>
        </div>
      </div>
      <div className="w-[100%] h-[70rem] flex justify-around flex-wrap items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-[30%] h-[45%] bg-white shadow-lg rounded-md flex justify-around items-center flex-col mb-5 max-md:w-[90%]"
          >
            <div className="w-full h-[15%] flex justify-start px-5 items-center">
              <p className="text-2xl">{plan.name}</p>
            </div>
            <div className="w-full h-[17%] flex justify-center items-center">
              <p className="text-5xl ">${plan.totalAmount}</p>
            </div>
            <div className="w-full h-[43%] flex-col justify-around items-center flex">
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Minimum Possible Deposit:</p>
                <p>${plan.minDeposit}</p>
              </div>
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Maximum Possible Deposit:</p>
                <p>${plan.maxDeposit}</p>
              </div>
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Minimum Return:</p>
                <p>${plan.minReturn}</p>
              </div>
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Maximum Return:</p>
                <p>${plan.maxReturn}</p>
              </div>
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Gift Bonus:</p>
                <p>${plan.bonus}</p>
              </div>
              <div className="w-full h-[14%] px-3 flex justify-between items-center">
                <p>Duration:</p>
                <p>{plan.duration}</p>
              </div>
            </div>
            <div className="w-full h-[15%] flex justify-center gap-2 items-center">
              <button className="w-[20%] text-white rounded-md h-[60%] bg-blue-500 flex justify-center items-center text-2xl">
                <MdModeEdit />
              </button>
              <button className="w-[20%] text-white rounded-md h-[60%] bg-red-500 flex justify-center items-center text-2xl">
                <MdOutlineClear />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPack;
