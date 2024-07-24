import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDeposit, updateInvestmentPlan } from "../Global/Slice"; // Adjust the path as needed
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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

const Packages: React.FC = () => {
  const userToken = useSelector((state: any) => state.user.token);
  const userId = useSelector((state: any) => state.user.user?._id);
  const dispatch = useDispatch();

  const [amounts, setAmounts] = useState<{ [key: string]: number }>(
    plans.reduce((acc, plan) => {
      acc[plan.name] = plan.totalAmount;
      return acc;
    }, {} as { [key: string]: number })
  );

  const handleInputChange = (planName: string, value: number) => {
    setAmounts({
      ...amounts,
      [planName]: value,
    });
  };

  const handleJoinPlan = async (plan: (typeof plans)[0]) => {
    const amount = amounts[plan.name];
    const loadingToast = toast.loading("Joining plan...");
    try {
      const response = await axios.post(
        `https://sk-smoky.vercel.app/api/user/invest/${userId}`,
        {
          planName: plan.name,
          amount,
          duration: plan.duration, // Send duration to the server
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to join plan");
      }

      const result = response.data.data;
      dispatch(userDeposit(result.deposit)); // Assuming the API returns the new deposit
      dispatch(updateInvestmentPlan(plan.totalAmount)); // Update the investment plan in the state

      toast.success("Successfully joined the plan", {
        id: loadingToast,
      });
    } catch (error) {
      console.error("Error joining plan:", error);
      toast.error("Error joining plan", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="w-full h-full bg-[#101829] scrollbar overflow-y-scroll">
      <Toaster />
      <div className="w-full h-[28%] flex justify-start items-center max-md:h-[10%]">
        <div className="w-[30%] h-[80%] flex justify-center gap-4  flex-col items-start px-4 max-md:w-[90%]">
          <p className="font-semibold text-2xl text-slate-100">
            Available Packages
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[75rem] flex justify-around flex-wrap items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-[30%] h-[50%] bg-white shadow-lg rounded-md flex justify-around items-center flex-col mb-5 max-md:w-[90%]"
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
            <div className="w-full h-[20%] flex justify-center items-center flex-col">
              <input
                type="number"
                value={amounts[plan.name]}
                onChange={(e) =>
                  handleInputChange(plan.name, parseInt(e.target.value))
                }
                className="w-[80%] p-2 mb-4 border border-gray-300 rounded-md"
                min={plan.minDeposit}
                max={plan.maxDeposit}
              />
              <button
                onClick={() => handleJoinPlan(plan)}
                className="w-[80%] p-2 bg-blue-500 text-white rounded-md"
              >
                Join {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
