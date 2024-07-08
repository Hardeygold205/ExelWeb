import { useState, useEffect } from "react";
import ExcelMobile from "../assets/excelmobile.png";
import ExcelMobile2 from "../assets/mobile-trade.png";
import ExcelQrcode from "../assets/excel-QR-CODE.png";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { motion } from "framer-motion";

// Custom hook to check screen size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function Preview() {
  const [isDesktop, setIsDesktop] = useState(true);
  const size = useWindowSize();

  const shouldAnimate = size.width >= 768; // md breakpoint is 768px in Tailwind CSS

  return (
    <div className="place-content-center space-y-20 my-10 mb-16 h-auto max-w-7xl mx-auto">
      <div className="container mx-auto text-center md:flex justify-between w-full md:w-[80%] md:space-x-10">
        <div className="grid gap-5 place-content-center md:w-1/2">
          {shouldAnimate ? (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.2 }}
              viewport={{ once: true }}
              className="flex justify-center">
              {isDesktop ? (
                <img
                  src={ExcelMobile}
                  alt="Desktop view"
                  className="w-[250px] h-auto"
                />
              ) : (
                <img
                  src={ExcelMobile2}
                  alt="Mobile view"
                  className="w-[250px] h-auto "
                />
              )}
            </motion.div>
          ) : (
            <div className="flex justify-center">
              {isDesktop ? (
                <img
                  src={ExcelMobile}
                  alt="Desktop view"
                  className="w-[250px] h-auto"
                />
              ) : (
                <img
                  src={ExcelMobile2}
                  alt="Mobile view"
                  className="w-[250px] h-auto "
                />
              )}
            </div>
          )}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-x-3 outline rounded-full flex items-center justify-around p-1 w-full">
            <button
              className={` p-2 rounded-full w-1/2 ${
                isDesktop ? "bg-blue-700" : ""
              }`}
              onClick={() => setIsDesktop(true)}>
              Lite
            </button>
            <button
              className={`p-2 rounded-full w-1/2 ${
                !isDesktop ? "bg-blue-700" : ""
              }`}
              onClick={() => setIsDesktop(false)}>
              Pro
            </button>
          </motion.div>
        </div>
        {shouldAnimate ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            viewport={{ once: true }}
            className="grid w-full mt-10 md:mt-0 space-y-10 md:space-y-0 md:w-1/2">
            <div>
              <p className="md:text-4xl text-3xl font-bold text-center md:text-start">
                Trade on the go. Anywhere, <br className="md:flex hidden" />{" "}
                anytime.
              </p>
            </div>
            <div className="flex md:p-0 p-3 mb-16 justify-between md:justify-start items-center space-x-7">
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
          </motion.div>
        ) : (
          <div className="grid w-full mt-10 md:mt-0 space-y-10 md:space-y-0 md:w-1/2">
            <div>
              <p className="md:text-4xl text-3xl font-bold text-center md:text-start">
                Trade on the go. Anywhere, <br className="md:flex hidden" />{" "}
                anytime.
              </p>
            </div>
            <div className="flex md:p-0 p-3 mb-16 justify-between md:justify-start items-center space-x-7">
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
        )}
      </div>
    </div>
  );
}
