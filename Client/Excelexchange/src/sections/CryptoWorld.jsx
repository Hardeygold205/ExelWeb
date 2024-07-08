import WorldMap from "../assets/world_map.png";
import EurUsd from "../assets/eur-usd-removebg-preview.png";
import Commodity from "../assets/stocks.png";
import BtcEth from "../assets/eth-btc.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Buttons from "../constant/Buttons";
//import { BackgroundGradient } from "../ui/background-gradient";

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
      <div className="h-auto w-full items-center flex space-y-8 relative flex-col bg-base-200 bg-opacity-80 p-5 rounded-t-lg">
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
            <Buttons
              tittle="See What Crypto Can Be"
              className="w-70"
              bgColor="bg-gray-800"
            />
            {/* <Button className="transition-all duration-300 font-bold bg-gray-800 w-70">
              See what crypto can be
              <FontAwesomeIcon icon={faQrcode} className="text-xl px-2" />
            </Button> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[120px] bg-base-200 bg-opacity-80 rounded-b-lg"></div>
      <div className="custom1:flex items-center justify-center custom1:space-y-0 space-y-10 custom1:space-x-10 w-10/12 mx-auto flex flex-col custom1:flex-row">
        {ThreeInfo.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -100 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            exit={{ opacity: 0, y: 0 }}
            key={item}
            className="card outline outline-gray-500 bg-base-200 rounded-lg">
            <div className="card-body space-y-3 justify-between flex items-center">
              <img
                src={item.src}
                alt={item.type}
                height="100"
                width="100"
                className="object-contain"
              />
              <h3 className="lg:text-3xl md:text-2xl text-xl ">{item.type}</h3>
              <p className="text-center text-[0.8rem]">{item.description}</p>
              <Link to="" className="underline text-blue-800 mt-auto">
                Learn more
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
