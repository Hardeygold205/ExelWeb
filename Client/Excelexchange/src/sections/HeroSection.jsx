import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../constant/Buttons";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Spotlight } from "../ui/Spotlight";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";

export default function HeroSection() {
  const changes = [
    {
      text: "Buy",
    },
    {
      text: "&",
    },
    {
      text: "Sell",
    },
    {
      text: "your",
    },
    {
      text: "favorites",
    },
    {
      text: "Crypto",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Digital Funds",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
    },
    {
      text: "most",
    },
    {
      text: "reliable",
    },
  ];

  const words = ["Fast", "Best", "Leading", "Modern"];

  return (
    <div className="place-items-center relative h-auto space-y-7 md:space-y-12 my-10 grid p-5 md:p-20 pt-5 max-w-7xl mx-auto">
      <Spotlight
        className="-top-40 left-0 md:left-50 md:-top-10"
        fill="white"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex-1 flex flex-col justify-center items-center space-y-10">
        <div className="md:space-y-10 space-y-5">
          <h1 className="md:text-6xl pt-5 text-4xl font-extrabold text-center leading-snug">
            The World&apos;s <FlipWords words={words} />{" "}
            <br className="md:flex hidden" /> Foreign Exchanges Merchant
          </h1>
          <TypewriterEffect changes={changes} size="10" />
        </div>
        <div className="mx-auto p-2 justify-center items-center">
          <label className=" gap-x-4 flex md:items-center ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox bg-blue-800 align-top"
            />
            <span className="">Excel makes it easy to buy crypto</span>
          </label>
          <label className="my-5 gap-x-4 flex md:items-center align-top ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox text-blue-800 align-top"
            />
            <span className="">
              Your Safe and Trusted Crypto Exchange and security certification
            </span>
          </label>
          <label className="my-5 gap-x-4 flex md:items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox text-blue-800 align-top"
            />
            <span className="">
              The industry’s most comprehensive insurance coverage and verified
              proof of reserves
            </span>
          </label>
        </div>
        <Buttons tittle="Explore More" />
      </motion.div>
    </div>
  );
}
