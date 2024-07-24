import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/fintrade.png";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [Toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!Toggle);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <div
      className="w-full h-[17vh] bg-[#023E8A] flex justify-around flex-col items-center phone:h-[10vh] smallPhone:h-[13vh]"
      id="home"
    >
      <div className="w-full h-[30%] border-b-2 flex justify-center items-center">
        <p
          className="text-white smallPhone:text-sm"
          onClick={() => navigate("/login")}
        >
          Start trading on FinSavy. Learn more
        </p>
      </div>
      <div className="w-full h-[60%] flex justify-around px-2 items-center">
        <div
          className="w-[10%] h-[100%] flex justify-center items-center"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="" className="w-[100%] h-[100%] object-contain" />
        </div>
        <div className="w-[30%] h-[100%]  flex justify-around items-center phone:hidden">
          <nav
            className="text-white font-semibold cursor-pointer"
            onClick={() => navigate("")}
          >
            HOME
          </nav>
          <nav
            className="text-white font-semibold cursor-pointer py-2"
            onClick={() => {
              const faqSection = document.getElementById("faq");
              if (faqSection) {
                faqSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            FAQ
          </nav>
          <nav
            className="text-white font-semibold cursor-pointer"
            onClick={() => navigate("/about")}
          >
            ABOUT US
          </nav>
        </div>
        <div className="w-[20%] h-[100%] flex justify-around items-center phone:hidden">
          <button
            className="px-9 py-2 bg-[#968903] font-semibold text-white rounded-md"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="px-9 py-2 bg-blue-500 font-semibold text-white rounded-md"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
        <div className="w-[20%] h-[100%] relative hidden phone:flex justify-center items-center">
          {Toggle ? (
            <MdOutlineClear
              className="w-[70%] h-[70%] text-white cursor-pointer"
              onClick={HandleToggle}
            />
          ) : (
            <RiMenu3Fill
              className="w-[70%] h-[70%] text-white cursor-pointer"
              onClick={HandleToggle}
            />
          )}
          <AnimatePresence>
            {Toggle && (
              <motion.div
                className="HeaderMobileContainer absolute bg-[#050C1B] w-full top-[100%] left-0"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="Headernav w-full flex flex-col items-start px-6 py-4">
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                      navigate("/");
                    }}
                  >
                    HOME
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      const faqSection = document.getElementById("faq");
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    FAQ
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                      navigate("/about");
                    }}
                  >
                    ABOUT US
                  </nav>
                </div>
                <div className="getmalic w-full flex justify-start px-3 items-center py-2">
                  <button
                    className="px-9 py-2 bg-blue-500 font-semibold text-white rounded-md"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
