import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Button } from "../ui/moving-border";

export default function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true"
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
    <div className="place-items-center space-y-14 my-10 h-auto grid p-3 md:p-8 max-w-7xl mx-auto">
      <div>
        <h1 className="md:text-6xl custom2:text-3xl sm:text-4xl font-extrabold text-start md:text-center">
          Buy Bitcoin, Ethereum, and <br className="md:flex hidden" /> 250+
          cryptocurrencies
        </h1>
      </div>
      <div className="justify-center items-center">
        <Button
          borderRadius="1.75rem"
          className="transition-all duration-300 font-extrabold cursor-pointer">
          Check Crypto Prices
          <FontAwesomeIcon icon={faQrcode} className="text-xl px-2" />
        </Button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr className="text-xl">
              <th>Rank</th>
              <th>Crytpo Name</th>
              <th>Prices</th>
              <th>Marketcap</th>
              <th>Change (24h)</th>
              <th>Price Change (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, index) => (
              <tr key={crypto.id} className="hover items-center text-lg">
                <th className="">{index + 1}</th>
                <td className="flex items-center mt-3">
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="w-6 h-6 mr-2"
                  />
                  {crypto.name}
                </td>
                <td className="">${crypto.current_price.toLocaleString()}</td>
                <td className="">${crypto.market_cap.toLocaleString()}</td>
                <td
                  className={` ${
                    crypto.price_change_percentage_24h < 0
                      ? "text-red-500 text-center"
                      : "text-green-500 text-center"
                  }`}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="w-20">
                  <Sparklines data={crypto.sparkline_in_7d.price.slice(-24)}>
                    <SparklinesLine
                      color={
                        crypto.price_change_percentage_24h < 0 ? "red" : "green"
                      }
                    />
                  </Sparklines>
                </td>
                <td>
                  <Link to="" type="button" className="btn bg-blue-800 btn-xs">
                    Trade
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
