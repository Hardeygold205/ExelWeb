import { useState, useEffect } from "react";
import BuyBtcImg from "../assets/buy-bitcoin-img.png";
import ReoccuringImg from "../assets/recurring-buy.png";
import OnStakeImg from "../assets/on-chain-staking.png";

export default function CryptoJourney() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
        );
        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="place-items-center space-y-14 my-10 h-auto grid p-1 md:p-8 max-w-7xl mx-auto">
      <div>
        <h1 className="md:text-6xl text-4xl font-extrabold text-center">
          Your crypto journey starts here
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-5/12 p-2">
          <div className="rounded-4 mb-3 p-4 rounded-xl  bg-base-200">
            <div className="grid grid-cols-5 items-center">
              <div className=" col-span-3 space-y-3 p-5">
                <h4 className="text-blue-800 text-lg font-bold">Buy crypto</h4>
                <h3 className="text-lg">
                  Buy BTC, ETH, and other crypto easily via bank transfer.
                </h3>
              </div>
              <div className="col-span-2">
                <img className="img-fluid" src={BuyBtcImg} alt="" width="150" />
              </div>
            </div>
          </div>
          <div className="rounded-4 mb-3 px-4 pt-4 pb-2 rounded-xl bg-base-200">
            <div className="flex flex-col justify-center items-center">
              <div className="px-3 text-start">
                <h4 className="text-blue-800 text-lg font-bold">
                  Price Alerts
                </h4>
                <h3 className="text-lg">
                  Be notified on BTC, ETH, DOGE prices, and more.
                </h3>
              </div>
              <div className="mt-3 w-full h-auto">
                {cryptos.map((crypto) => (
                  <div key={crypto.id}>
                    <div className="flex justify-between items-center py-1 px-4">
                      <div className="flex items-center">
                        <img
                          className="mt-1 p-1"
                          src={crypto.image}
                          alt={crypto.name}
                          width="25"
                          height="25"
                        />
                        <div className="ml-2">
                          <h6 className="mb-0">{crypto.name}</h6>
                          <h6 className="mb-0 opacity-50 text-sm">
                            {crypto.symbol.toUpperCase()}
                          </h6>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="mb-0">${crypto.current_price}</h6>
                        <h6
                          className={`mb-0 text-sm ${
                            crypto.price_change_percentage_24h > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}>
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                    <div className="divider p-0 m-0 w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 p-2">
          <div className="rounded-xl mb-3 px-5 pt-4 bg-base-200">
            <div className="flex flex-col justify-center items-center">
              <div className=" mb-5">
                <h4 className="text-blue-800 text-lg font-bold">
                  Recurring Buy
                </h4>
                <h3 className="text-lg">
                  Grow your portfolio automatically with daily, weekly, or
                  monthly trades.
                </h3>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src={ReoccuringImg}
                  alt=""
                  width="350"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl mb-1 p-5 md:p-14 bg-base-200">
            <div className="flex justify-around space-y-4 items-center">
              <div className="">
                <h4 className="text-blue-800 text-lg font-bold">
                  On-chain Staking
                </h4>
                <h3 className="text-lg">
                  Generate passive income by helping to secure blockchains.
                </h3>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src={OnStakeImg}
                  alt=""
                  width="500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:p-5 bg-base-200 rounded-xl justify-center flex-col lg:w-10/12 space-y-1 md:space-y-3">
          <h5 className="text-gray-400 text-center">
            Join our <span className="text-blue-800">01+ users</span>
          </h5>
          <h1 className="font-bold text-3xl text-center">Get started today</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
}
