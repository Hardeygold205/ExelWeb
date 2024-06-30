import { useState } from "react";
// import ExcelDesktop from "../assets/exceldesktop.png";
import ExcelMobile from "../assets/excelmobile.png";
import ExcelQrcode from "../assets/excel-QR-CODE.png";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";

export default function Preview() {
  const [isDesktop, setIsDesktop] = useState(true);
  return (
    <div className="place-content-center h-screen">
      <div className="container mx-auto text-center md:flex justify-between w-[80%] md:space-x-10">
        <div className="grid gap-5 place-content-center w-1/2">
          <div className="flex justify-center">
            {isDesktop ? (
              <img
                src={ExcelMobile}
                alt="Desktop view"
                className="w-[250px] h-auto"
              />
            ) : (
              <img
                src={ExcelMobile}
                alt="Mobile view"
                className="w-[250px] h-auto "
              />
            )}
          </div>
          <div className="space-x-3 outline rounded-full items-center justify-around p-1 w-[100%]">
            <button
              className={` py-2 rounded-full px-12 ${
                isDesktop ? "bg-blue-700" : ""
              }`}
              onClick={() => setIsDesktop(true)}>
              Lite
            </button>
            <button
              className={`py-2 rounded-full px-12 ${
                !isDesktop ? "bg-blue-700" : ""
              }`}
              onClick={() => setIsDesktop(false)}>
              Pro
            </button>
          </div>
        </div>
        <div className="grid w-1/2">
          <div>
            <p className="text-4xl font-bold text-start">
              Trade on the go. Anywhere, <br /> anytime.
            </p>
          </div>
          <div className="flex mb-16 items-center space-x-10">
            <div className="flex justify-center outline rounded-md p-2 w-40 h-40">
              <img src={ExcelQrcode} alt="QR code" className="w-36 h-36" />
            </div>
            <div className="text-start space-y-4">
              <p className="text-gray-500">Scan to download the App</p>
              <p className="text-white font-bold">iOS and Android</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <FaApple className="w-10 h-10" />
              <p>MacOS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaWindows className="w-10 h-10" />
              <p>Windows</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLinux className="w-10 h-10" />
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
