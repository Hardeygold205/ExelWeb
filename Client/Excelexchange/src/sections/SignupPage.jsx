import { useState } from "react";
import Excellogo from "../assets/excel-blue-logo.png";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useSession from "../hooks/useSession";

export default function SignupPage() {
  const { login } = useSession();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateFirstName = (firstname) => {
    if (!firstname) {
      return "Firstname is required";
    } else if (firstname.length < 3) {
      return "Name must be at least 3 characters";
    }
    return "";
  };

  const validateLastName = (lastname) => {
    if (!lastname) {
      return "Lastname is required";
    } else if (lastname.length < 3) {
      return "Name must be at least 3 characters";
    } else if (firstname === lastname) {
      return "Firstname and lastname cannot be the same";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email address is invalid";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const firstnameError = validateFirstName(firstname);
    const lastnameError = validateLastName(lastname);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (firstnameError || lastnameError || emailError || passwordError) {
      setErrors({
        firstname: firstnameError,
        lastname: lastnameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setErrors({});
    setMessage("");
    try {
      const apiUrl = import.meta.env.VITE_APP_SERVER_API_URL;
      console.log("the api:", apiUrl);
      const response = await axios.post(`${apiUrl}/signup`, {
        firstname,
        lastname,
        email,
        password,
      });
      login(response.data.token);
      navigate("/dashboard");
      console.log("Signup response:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Internal server error");
      }
    }
  };

  const handleInputChange = (setter, validator, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      const error = validator(e.target.value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error,
      }));
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto relative">
      <div className="grid lg:grid-cols-5 w-full mx-auto max-w-[1400px] mt-14 lg:mt-0 lg:py-10 relative xl:fixed top-0 bottom-0">
        <div className="lg:col-span-2 col-span-5 p-5 md:p-10">
          <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Welcome to Excelexchange
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Let&apos;s get you started! Enter the field below to join us.
            </p>
            <form className="my-8" onSubmit={handleSignup}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="Tyler"
                    type="text"
                    value={firstname}
                    onChange={handleInputChange(
                      setFirstname,
                      validateFirstName,
                      "firstname"
                    )}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-[.7rem] ">
                      {errors.firstname}
                    </p>
                  )}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="Durden"
                    type="text"
                    value={lastname}
                    onChange={handleInputChange(
                      setLastname,
                      validateLastName,
                      "lastname"
                    )}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-[.7rem] ">
                      {errors.lastname}
                    </p>
                  )}
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  value={email}
                  onChange={handleInputChange(setEmail, validateEmail, "email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-[.7rem] ">{errors.email}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={handleInputChange(
                    setPassword,
                    validatePassword,
                    "password"
                  )}
                />
                {errors.password && (
                  <p className="text-red-500 text-[.7rem] ">
                    {errors.password}
                  </p>
                )}
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
                  className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="button">
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="button">
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button>
              </div>
              {message && (
                <p className="text-red-500 text-[.7rem]  mt-4">{message}</p>
              )}
            </form>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-5 flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-black p-5 w-full rounded-none md:rounded-2xl border-gray-400 border-[0.6px] m-10 mx-auto">
          <div className="space-y-10 lg:space-y-20">
            <h1 className="text-2xl lg:text-4xl font-extrabold">
              Find and Trade <br className="hidden lg:flex" /> Thousands of{" "}
              <br className="hidden lg:flex" />
              Cryptocurrencies
            </h1>
            <div className="flex flex-col gap-y-5 lg:gap-y-10">
              <label className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  defaultChecked
                  disabled
                  className="checkbox bg-blue-800 pointer-events-none"
                />
                <span>Excel makes it easy to buy crypto</span>
              </label>
              <label className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  defaultChecked
                  disabled
                  className="checkbox bg-blue-800 pointer-events-none"
                />
                <span>Your Safe and Trusted Crypto Exchange</span>
              </label>
              <label className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  defaultChecked
                  disabled
                  className="checkbox bg-blue-800 pointer-events-none"
                />
                <span>
                  The industry’s most comprehensive insurance coverage
                </span>
              </label>
            </div>
          </div>
          <div className="hidden xl:flex">
            <div className="relative p-6">
              <motion.div className="absolute inset-0 border-8 border-dashed border-blue-800 rounded-full" />
              <motion.img
                src={Excellogo}
                alt="Excel logo"
                className="w-32 h-32 lg:w-60 lg:h-60 drop-shadow-2xl"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
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
