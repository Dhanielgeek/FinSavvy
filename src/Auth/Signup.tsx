import Logo from "../assets/1-removebg-preview.png";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const url = "https://fin-savy-application.onrender.com/api/v1/users/signup";
  const data = {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
  };

  const passwordRegex =
    /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
  const isValidPassword = passwordRegex.test(password);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    const toastLoading = toast.loading("Please wait");

    if (
      !firstName ||
      !userName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please input all fields");
    } else if (confirmPassword !== password) {
      toast.error("Passwords do not match");
    } else if (!isValidPassword) {
      toast.error("Password must contain at least one special character");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(url, data);
        toast.success(response.data.message);
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        toast.dismiss(toastLoading);
      }
    }
  };

  return (
    <div className="w-full h-[55rem] flex justify-center bg-[#4B3BC6] items-center phone:h-[82rem]">
      <div className="w-[60%] h-[80%] bg-slate-50 rounded-lg flex justify-center gap-5 items-start flex-col phone:w-[90%]">
        <div className="w-[20%] h-[20%] flex justify-center items-center phone:w-[40%]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-[50%] h-[12%] phone:w-[100%] flex justify-center items-start px-8 flex-col">
          <h2 className="font-semibold text-4xl smallPhone:text-2xl">
            Create Account
          </h2>
          <p className="text-lg phone:text-center text-gray-400">
            Register to continue with FinsTrading.com
          </p>
        </div>
        <form
          className="w-full h-[40%] bg-black flex flex-col justify-center items-center phone:flex-col gap-2 phone:h-[20.5%]"
          onSubmit={handleSignup}
        >
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="firstName"
              className="font-medium text-xl text-[#547177]"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Your First Name"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="lastName"
              className="font-medium text-xl text-[#547177]"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Your Last Name"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="email"
              className="font-medium text-xl text-[#547177]"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="userName"
              className="font-medium text-xl text-[#547177]"
            >
              User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter Your User Name"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="password"
              className="font-medium text-xl text-[#547177]"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-[50%] h-full px-5 flex justify-center items-start flex-col phone:w-full">
            <label
              htmlFor="confirmPassword"
              className="font-medium text-xl text-[#547177]"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Your Password"
              className="w-full bg-transparent px-3 text-lg border-2 outline-none h-[70%] rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="w-full h-[28%]">
            <div className="w-full h-[28%] flex justify-start px-7 gap-2 items-center">
              <input type="checkbox" />
              <p className="text-xl text-[#547177] smallPhone:text-sm">
                I agree with{" "}
                <span className="text-red-500">Privacy & Policy</span> and{" "}
                <span className="text-red-500">Terms & Conditions</span>
              </p>
            </div>
            <div className="w-full h-[40%] flex justify-center items-center">
              <button
                className="w-[90%] h-[60%] bg-[#5270FC] rounded-full text-lg text-white"
                type="submit"
              >
                {loading ? "LOADING" : "CREATE ACCOUNT"}
              </button>
            </div>
            <div className="w-full h-[23%] flex justify-center items-center">
              <p className="text-xl text-[#547177]">
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
