import DefiImg from "../assets/defi.png"
export default function GetStarted() {
  return (
    <div className="w-full h-auto p-5 bg-slate-300">
      <div className="grid md:grid-cols-2 gap-10 place-items-center justify-center items-center max-w-7xl mx-auto">
        <div className="text-black flex flex-col text-center space-y-10">
          <h3 className="text-4xl font-bold ">Ready to get started?</h3>
          <p>
            It only takes 3 minutes to get your account set up and ready for
            trading. Trade bitcoin and other crypto with confidence on the
            world&apos;s fastest and most secure crypto exchange
          </p>
          <h2 className="text-2xl font-bold">
            Get your step-by-step guide to setting up an account with
            Excelexchange
          </h2>
          <button className="w-full btn p-4 rounded-full bg-blue-800 text-white ">
            Open account
          </button>
        </div>
        <div className="">
            <img
              src={DefiImg}
              alt="Get Started"
              className="w-auto h-auto object-cover"
            />
        </div>
      </div>
    </div>
  );
}

