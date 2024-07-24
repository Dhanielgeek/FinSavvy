import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  const contexts = useMemo(
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

  useEffect(() => {
    const interval = setInterval(() => {
      setContextIndex((prevIndex) => (prevIndex + 1) % contexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contexts]);

  return (
    <div
      className="Home bg-gradient-to-r from-gray-900 to-black h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`first-${contextIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-indigo-400 mb-4"
            >
              {contexts[contextIndex].firstText}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`second-${contextIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              {contexts[contextIndex].secondText}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`third-${contextIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              {contexts[contextIndex].thirdText}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.button
              key={`fourth-${contextIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => Navigate("/login")}
            >
              {contexts[contextIndex].fourthText}
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
