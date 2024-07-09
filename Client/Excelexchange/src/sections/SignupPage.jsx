import Excellogo from "../assets/excel-blue-logo.png";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BTCImg from "../assets/bitcoin-btc-logo.png";
import ETHImg from "../assets/Ethereum-Logo-PNG-Pic.png";
import TRXImg from "../assets/tron-logo.png";
import USDTImg from "../assets/tether.png";
import XRPImg from "../assets/stellar.png";

export default function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-center mx-auto relative ">
      <div className="grid grid-cols-5 w-full mx-auto max-w-[1400px] mt-14 custom1:mt-0 custom1:py-10 relative custom1:fixed top-0 bottom-0">
        <div className="custom1:col-span-2 col-span-5 p-5 custom1:p-10">
          <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Welcome to Excelexchange
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Let&apos;s get you started! Enter the field below to join us.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <p className="text-neutral-600 text-sm my-4">
                By signing up, you agree to our terms of service and privacy
                policy.
              </p>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit">
                Sign up &rarr;
                <BottomGradient />
              </button>

              <div className="flex items-center ">
                <span className="p-0 m-0">Already have an account?</span>
                <Link to="/login" className="text-blue-800 font-extrabold mx-3">
                  Login
                </Link>
              </div>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <div className="flex flex-col space-y-4">
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit">
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit">
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="custom1:col-span-3 m-10 mx-auto  w-full justify-center items-center hidden custom1:flex rounded-none md:rounded-2xl border-gray-400 border-[0.6px]">
          <div className="relative p-6 ">
            <motion.div className="absolute inset-0 border-8 border-dashed border-blue-800  rounded-full" />
            <motion.img
              src={Excellogo}
              alt="Excel logo"
              className="w-60 h-60 drop-shadow-2xl"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <div>
            <img
              src={BTCImg}
              alt="bitcoin"
              className="absolute opacity-15 w-20 h-20 top-20 right-1 "
            />
          </div>
          <div>
            <img
              src={BTCImg}
              alt="bitcoin"
              className="absolute opacity-15 w-20 h-20 top-20 right-1 "
            />
          </div>
          <div>
            <img
              src={ETHImg}
              alt="bitcoin"
              className="absolute opacity-15 w-20 h-20 top-50 right-1 "
            />
          </div>
          <div>
            <img
              src={TRXImg}
              alt="bitcoin"
              className="absolute opacity-15 w-20 h-20 top-20 left-[41%]"
            />
          </div>
          <div>
            <img
              src={USDTImg}
              alt="bitcoin"
              className="absolute w-20 h-20 bottom-10 opacity-25"
            />
          </div>
          <div>
            <img
              src={XRPImg}
              alt="bitcoin"
              className="absolute opacity-10 w-20 h-20 bottom-20 left-[50%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
