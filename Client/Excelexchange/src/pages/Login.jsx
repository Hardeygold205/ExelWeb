import Excellogo from "../assets/excel-blue-logo.png";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="col-span-1 bg-orange-50 h-screen justify-center items-center flex">
        <div>
          <motion.img
            src={Excellogo}
            alt="Excel logo"
            className="w-50 h-50 drop-shadow-2xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
      <div className="col-span-2 h-100"></div>
    </div>
  );
}
