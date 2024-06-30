import { FaArrowRight } from "react-icons/fa";
import Excellogo from "../assets/excel-blue-logo.png";
export default function Visions() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 items-center flex justify-center flex-col">
      <h1 className="text-blue-800 text-xl font-bold">OUR VISION</h1>
      <h1 className="text-4xl font-bold text-center">
        Cryptocurrency in <br /> Every Wallet™
      </h1>
      <div>
        <img
          src={Excellogo}
          alt="Excel logo"
          className="w-50 h-50 drop-shadow-xl "
        />
      </div>
      <div className="flex justify-between my-5 md:w-[60%] w-full">
        <div className="text-center ">
          <h3 className="font-bold text-xl">Founded in</h3>
          <h1 className="text-4xl font-extrabold text-blue-800">2023</h1>
        </div>
        <div className="text-center ">
          <h3 className="font-bold text-xl">Users</h3>
          <h1 className="text-4xl font-extrabold text-blue-800">01</h1>
        </div>
      </div>
      <div className="space-y-8">
        <button className="px-12 py-5 outline outline-2 rounded-full flex items-center transition-all duration-300 font-bold hover:bg-white hover:text-black">
          About us
          <FaArrowRight className="mx-3" />
        </button>
      </div>
    </div>
  );
}
