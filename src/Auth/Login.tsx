import React, { FormEvent, useState } from "react";
import Logo from "../assets/fintrade.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Userdata, userToken } from "../Global/Slice";

const Login: React.FC = () => {
  const [userNameOrEmail, setuserNameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const data = { userNameOrEmail, password };
  const url = `${import.meta.env.VITE_DEVE_URL}/api/user/login`;

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const toastLoading = toast.loading("Please wait...");
    try {
      const response = await axios.post(url, data);
      dispatch(Userdata(response.data.data));
      dispatch(userToken(response.data.token));
      toast.success("Login successful!", { duration: 4000 });
      setTimeout(() => {
        if (response.data.data.isAdmin) {
          Navigate("/welcome", { replace: true });
        } else {
          Navigate("/user/overview", { replace: true });
        }
      });
      Navigate("/user/overview", { replace: true });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMsg, { duration: 3000 });
      } else {
        toast.error("Error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(toastLoading);
    }
  };

  return (
    <div className="w-[100%] h-[45rem] bg-[#4B3BC6] flex justify-center items-center max-md:h-[60rem]">
      <div className="w-[35%] h-[80%] bg-slate-50 rounded-lg flex flex-col justify-center gap-2 items-center max-md:w-[90%]">
        <div className="w-[30%] h-[20%] flex justify-center items-center">
          <img src={Logo} alt="Logo" onClick={() => Navigate("/")} />
        </div>
        <div className="w-[100%] h-[14%] flex justify-center items-center flex-col">
          <h2 className="font-medium text-4xl">Welcome Back !</h2>
          <p className="text-lg phone:text-center text-gray-400 smallPhone:text-[16px]">
            Login to continue with FinsTrading.com user Panel
          </p>
        </div>
        <div className="w-[85%] h-[14%] max-md:h-[12%]">
          <label
            htmlFor="details"
            className="text-xl font-medium text-[#454d4e]"
          >
            Email or UserName
          </label>
          <input
            id="details"
            type="text"
            placeholder="Your Email or UserName"
            className="w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[60%] rounded-md"
            onChange={(e) => setuserNameOrEmail(e.target.value)}
          />
        </div>
        <div className="w-[85%] h-[14%]  max-md:h-[12%]">
          <label
            htmlFor="password"
            className="text-xl font-medium text-[#454d4e]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Your Password"
            className="w-[100%] bg-transparent px-3 text-lg border-2 outline-none h-[60%] rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-[85%] h-[10%] flex justify-between items-center">
          <div className="w-[50%] h-[100%] flex justify-start gap-2 items-center">
            <input type="checkbox" className="w-[18px] h-[18px]" />
            <p className="text-xl font-medium text-gray-400 smallPhone:text-[16px]">
              Remember me
            </p>
          </div>
          <p className="text-xl smallPhone:text-[16px]">
            <Link to="/forget">Forgot Password</Link>
          </p>
        </div>
        <div className="w-[80%] h-[18%] flex justify-around items-center flex-col">
          <button
            className="w-[100%] h-[47%] bg-[#5270FC] rounded-full text-lg text-white"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Loading..." : "Account Login"}
          </button>
          <p className="text-xl smallPhone:text-[16px]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
