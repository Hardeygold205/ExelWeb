import { FaArrowRight } from "react-icons/fa";
import Excellogo from "../assets/excel-blue-logo.png";
import { Button } from "../ui/moving-border";

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
          className="w-50 h-50 drop-shadow-2xl"
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
        <Button className="flex items-center transition-all duration-300 font-bold">
          About us
          <FaArrowRight className="mx-3 hover:rotate-45 ease-in-out transition-all duration-700" />
        </Button>
      </div>
    </div>
  );
}
