import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Excellogo from "../assets/excel-blue-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGlobe,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    if (location.pathname !== "/login" && location.pathname !== "/signup") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const hideScrolling =
    location.pathname === "/login" || location.pathname === "/signup";

  const navlist = [
    { summary: "Buy Crypto", link: "/buycrypto" },
    { summary: "Market", link: "/market" },
    { summary: "Portfolio", link: "/portfolio" },
    { summary: "Trade", link: "/trade" },
    { summary: "Company", link: "/company" },
    { summary: "More", link: "/more" },
  ];

  return (
    <div
      className={`${
        hideScrolling
          ? "bg-base-200 dark:bg-black navbar top-0 mx-auto left-0 right-0 w-full border-b-gray-700 border-b-[0.6px] z-50 transition-all duration-300 fixed"
          : isScrolled
          ? "bg-base-200 bg-opacity-95 dark:bg-black navbar w-full mx-auto lg:w-[95%] border-x-[0.6px] border-x-gray-700 fixed top-0 left-0 right-0 rounded-b-xl border-b-gray-700 border-b-[0.6px] z-50 transition-all duration-300"
          : "navbar top-0 mx-auto left-0 right-0 w-full border-b-gray-700 border-b-[0.6px] z-50 transition-all duration-300"
      }`}>
      {showMenu && (
        <div className="absolute top-0 right-0 w-full h-screen z-50">
          <div className="flex flex-col bg-white h-screen w-full px-4 py-6 shadow-lg">
            <div className="flex items-center justify-end px-4 py-2">
              <button
                onClick={() => setShowMenu(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-black">
                <FaTimes size={24} />
              </button>
            </div>
            {navlist.map((item) => (
              <Link
                onClick={() => setShowMenu(false)}
                to={item.link}
                key={item.summary}
                className={`block px-4 py-2 text-sm font-medium ${
                  location.pathname === item.link
                    ? "text-blue-800"
                    : "text-gray-700 hover:text-blue-800"
                } transition-all duration-300`}>
                {item.summary}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="justify-between flex w-full">
        <div className="flex space-x-2 items-center">
          <div className="flex items-center">
            <Link to="/" className="font-extrabold flex items-center text-xl">
              <img src={Excellogo} className="w-8 h-8" alt="Excel logo" />
              <span className="uppercase font-bold text-blue-800 text-2xl ml-2">
                Excelexchange
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex">
            {navlist.map((item) => (
              <ul className="inline-flex" key={item.summary}>
                <li className="flex">
                  <Link
                    to={item.link}
                    className={`text-sm px-3 ${
                      location.pathname === item.link
                        ? "text-sky-900"
                        : "hover:text-sky-900"
                    }`}>
                    {item.summary}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <div className="gap-x-2 flex items-center">
            <div className="form-control hidden xl:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 input-sm md:w-auto "
              />
            </div>
            <div className="space-x-2 hidden custom:block">
              <Link to="/login" className="btn btn-sm">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-sm bg-blue-800 text-white">Sign Up</Link>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-xl hidden sm:block"
              />
              <FontAwesomeIcon
                icon={faQrcode}
                className="text-xl hidden sm:block"
              />
            </div>
            <div className="items-center sm:flex hidden">
              <label className="swap swap-rotate">
                <input type="checkbox" className="" value="emerald" />
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setShowMenu(true)}
                className="px-3 py-2 rounded-md text-sm font-medium">
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
