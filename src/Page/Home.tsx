import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import TradingViewWidgettwo from "../Components/Tradingwidget";

const Home = () => {
  const Context = useMemo(
    () => [
      {
        firstText: "THINK IN INVESTMENT",
        secondText: "Outstanding Platform with optimum Assistance!",
        thirdText:
          "With FinsTrading, all over the place becomes all in one place. Every part of your Investment lifecycle is here.",
        fourthText: "GET STARTED",
      },
      {
        firstText: "THINK IN MOTION",
        secondText: "Take your finances to The Next level with Us.",
        thirdText:
          "With FinsTrading, all over the place becomes all in one place. Every part of your Investment lifecycle is here.",
        fourthText: "LOGIN",
      },
      {
        firstText: "THINK PROFITABLY",
        secondText: "Total investment freedom for Everyone!",
        thirdText:
          "With FinsTrading, all over the place becomes all in one place. Every part of your Investment lifecycle is here.",
        fourthText: "LOGIN",
      },
    ],
    []
  );

  const [contextIndex, setContextIndex] = useState(0);
  const [currentSecondText, setCurrentSecondText] = useState("");
  const [currentThirdText, setCurrentThirdText] = useState("");
  const [currentFourthText, setCurrentFourthText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setContextIndex((prevIndex) => (prevIndex + 1) % Context.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Context]);

  useEffect(() => {
    const secondTextAnimationInterval = setInterval(() => {
      const textToAnimate = Context[contextIndex].secondText;
      setCurrentSecondText(
        textToAnimate.slice(0, currentSecondText.length + 1)
      );
    }, 50);

    return () => clearInterval(secondTextAnimationInterval);
  }, [contextIndex, currentSecondText, Context]);

  useEffect(() => {
    const thirdTextAnimationInterval = setInterval(() => {
      const textToAnimate = Context[contextIndex].thirdText;
      setCurrentThirdText(textToAnimate.slice(0, currentThirdText.length + 1));
    }, 50);

    return () => clearInterval(thirdTextAnimationInterval);
  }, [contextIndex, currentThirdText, Context]);

  useEffect(() => {
    const fourthTextAnimationInterval = setInterval(() => {
      const textToAnimate = Context[contextIndex].fourthText;
      setCurrentFourthText(
        textToAnimate.slice(0, currentFourthText.length + 1)
      );
    }, 50);

    return () => clearInterval(fourthTextAnimationInterval);
  }, [contextIndex, currentFourthText, Context]);

  return (
    <div
      className="Home w-[100%] h-[90vh] flex justify-around flex-col relative items-center smallPhone:h-[100vh]"
      id="home"
    >
      <div className="w-[85%] h-[70%] hold phone:w-[90%] phone:h-[55%]  MediumPhone:h-[60%] smallPhone:h-[100%]">
        <div className="w-[40%] h-[100%] flex justify-around items-start flex-col phone:w-[100%] ">
          <div className="w-[100%] h-[10%]  flex justify-start items-center">
            <h2 className="text-white">{Context[contextIndex].firstText}</h2>
          </div>
          <div className="w-[100%] h-[40%] flex justify-start items-center">
            <h2 className="font-semibold text-6xl text-white phone:text-6xl smallPhone:text-[1.3rem] MediumPhone:text-[2.5rem]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {currentSecondText}
              </motion.span>
            </h2>
          </div>
          <div className="w-[100%] h-[14%]  flex justify-start items-center">
            <p className="text-white">{currentThirdText}</p>
          </div>
          <div className="w-[100%] h-[15%] flex justify-start items-center">
            <button className="w-[30%] h-[67%] rounded-md bg-[#4B3BC6] text-white">
              {currentFourthText}
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full h-[70px] absolute top-[30.4rem]">
        <TradingViewWidgettwo />
      </div>
    </div>
  );
};

export default Home;
