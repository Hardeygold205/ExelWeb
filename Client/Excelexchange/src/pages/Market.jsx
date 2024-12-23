import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Market() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 50,
              page: page,
              sparkline: false,
            },
          }
        );
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCryptos();
  }, [page]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        <h1 className="mt-4">Please wait...</h1>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">#</th>
            <th className="py-2 ">Name</th>
            <th className="py-2">Symbol</th>
            <th className="py-2">Price</th>
            <th className="py-2">24h Change</th>
            <th className="py-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id} className="text-center">
              <td className="py-2">{(page - 1) * 50 + index + 1}</td>
              <td className="py-2 flex justify-start items-center ">
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-6 h-6 mr-2"
                />
                {crypto.name}
              </td>
              <td className="py-2">{crypto.symbol.toUpperCase()}</td>
              <td className="py-2">${crypto.current_price.toLocaleString()}</td>
              <td
                className={`py-2 ${
                  crypto.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="py-2">${crypto.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="btn"
          disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} className="btn">
          Next
        </button>
      </div>
    </div>
  );
}
