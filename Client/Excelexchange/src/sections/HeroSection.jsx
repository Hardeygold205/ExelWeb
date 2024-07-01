import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <div className="place-items-center h-auto space-y-20 my-10 grid p-5 md:p-20 pt-14 max-w-7xl mx-auto">
      <div className="space-y-10">
        <h1 className="md:text-6xl pt-5 text-4xl font-extrabold text-center leading-snug">
          The World&apos;s Leading <br className="md:flex hidden" /> Foreign
          Exchanges Merchant
        </h1>
        <p className="text-center text-2xl font-bold">
          Buy & Sell your favorites{" "}
          <span className="text-blue-800">Crypto</span> and{" "}
          <span className="text-blue-800">Digital Funds</span> with the most
          reliable
        </p>
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
      <div className="justify-center items-center">
        <button className="px-12 py-5 outline outline-2 rounded-full transition-all duration-300 font-bold hover:bg-white hover:text-black">
          Explore More
          <FontAwesomeIcon icon={faQrcode} className="text-xl px-2" />
        </button>
      </div>
    </div>
  );
}
