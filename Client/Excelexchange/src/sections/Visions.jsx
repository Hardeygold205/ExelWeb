import { FaArrowRight } from "react-icons/fa";
import Excellogo from "../assets/excel-blue-logo.png";
import Buttons from "../constant/Buttons";
import { useState, useEffect, useRef } from "react";

export default function Visions() {
  const [counter, setCounter] = useState('0');
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const duration = 2000;
    const endValue = 2023;

    const animateCounter = (startTime) => (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.floor(progress * endValue);
      setCounter(value);

      if (progress < 1) {
        requestAnimationFrame(animateCounter(startTime));
      }
    };

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        const startTime = performance.now();
        requestAnimationFrame(animateCounter(startTime));
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Adjust as needed
    });

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 items-center flex justify-center flex-col">
      <h1 className="text-blue-800 text-xl font-bold">OUR VISION</h1>
      <h1 className="text-4xl font-bold text-center">
        Cryptocurrency in <br /> Every Wallet™
      </h1>
      <div className="relative">
        <div className="absolute inset-10 rounded-full blur-2xl bg-blue-500 opacity-30"></div>
        <img src={Excellogo} alt="Excel logo" className="w-50 h-50" />
      </div>
      <div className="flex justify-between my-5 md:w-[60%] w-full">
        <div className="text-center ">
          <h3 className="font-extrabold text-xl">Founded in</h3>
          <h1 className="text-4xl font-extrabold text-blue-800">{counter}</h1>
        </div>
        <div ref={counterRef} className="text-center ">
          <h3 className="font-extrabold text-xl">Users</h3>
          <h1 className="text-4xl font-extrabold text-blue-800">01</h1>
        </div>
      </div>
      <div className="space-y-8">
        <Buttons tittle="About Us" icon={FaArrowRight} />
      </div>
    </div>
  );
}
