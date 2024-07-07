import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import WorldMap from "../assets/world_map.png";
import EurUsd from "../assets/eur-usd-removebg-preview.png";
import Commodity from "../assets/stocks.png";
import BtcEth from "../assets/eth-btc.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";

export default function CryptoWorld() {
  const ThreeInfo = [
    {
      src: EurUsd,
      type: "Currencies",
      description: "Trade and Swap the world's largest Foreign Currencies",
    },
    {
      src: Commodity,
      type: "Commodities",
      description: "Trade and Swap all Commodities, Digital funds and E-wallet",
    },
    {
      src: BtcEth,
      type: "Cryptocurrency",
      description: "Buy and Sell BTC, ETH & USDT and all other cryptocurrency",
    },
  ];
  return (
    <div className="place-content-center my-10 max-w-7xl mx-auto">
      <div className="h-auto w-full items-center flex space-y-8 relative flex-col bg-base-200 p-5 rounded-t-lg">
        <h2 className="md:text-4xl text-2xl text-center">
          Money makes the world go round
        </h2>
        <h1 className="md:text-7xl text-4xl text-center font-extrabold">
          CRYPTO MAKES THE WORLD GO FORWARD
        </h1>
        <div className="space-y-10">
          <img
            src={WorldMap}
            alt="WorldMap"
            className="w-[14rem] h-[14rem] mx-auto"
          />
          <div className="">
            <Button className="transition-all duration-300 font-bold bg-gray-800 w-70">
              See what crypto can be
              <FontAwesomeIcon icon={faQrcode} className="text-xl px-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[120px] bg-base-200 rounded-b-lg"></div>
      <div className="md:flex items-center justify-center md:space-y-0 space-y-10 md:space-x-10 w-10/12 mx-auto flex flex-col md:flex-row">
        {ThreeInfo.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ type: "spring", stiffness: 260, duration: 300 }}
            key={item}
            className="flex flex-col outline outline-gray-500 bg-base-200 rounded-lg space-y-5 items-center max-w-[20rem] max-h-[18rem] p-2 md:p-5">
            <img
              src={item.src}
              alt={item.type}
              className="w-[6rem] h-auto mx-auto"
            />
            <h3 className="text-3xl">{item.type}</h3>
            <p className="text-center text-[0.8rem]">{item.description}</p>
            <Link to="" className="underline text-blue-800 mt-auto">
              Learn more
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
