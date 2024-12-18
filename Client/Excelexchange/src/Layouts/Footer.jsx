import { Link } from "react-router-dom";
import Excellogo from "../assets/excel-blue-logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaInstagram size="20" />, link: "https://instagram.com" },
    { icon: <FaTwitter size="20" />, link: "https://twitter.com" },
    { icon: <FaWhatsapp size="20" />, link: "https://whatsapp.com" },
    { icon: <FaTelegram size="20" />, link: "https://telegram.org" },
    { icon: <FaLinkedin size="20" />, link: "https://linkedin.com" },
    { icon: <FaGithub size="20" />, link: "https://github.com" },
    { icon: <FaFacebook size="20" />, link: "https://facebook.com" },
    { icon: <FaSlack size="20" />, link: "https://slack.com" },
    { icon: <FaTiktok size="20" />, link: "https://threads.net" },
    { icon: <FaYoutube size="20" />, link: "https://youtube.com" },
  ];

  const footerlist = [
    {
      title: "Corporate",
      lists: ["Excel Exchange blog", "Social responsibility", "Contact us"],
    },
    {
      title: "Media Center",
      lists: ["Excel Exchange Media", "Team Pro"],
    },
    {
      title: "Legal & Reporting",
      lists: [
        "Regulations",
        "Financial Report",
        "Legal document",
        "Compensation Funds",
      ],
    },
    {
      title: "Platforms",
      lists: ["Excel App", "MetaTrader 4", "MetaTrader 5", "MetaTrader Mobile"],
    },
    {
      title: "Solutions",
      lists: ["Portfolio Management", "Risk Management"],
    },
    {
      title: "Instruments",
      lists: ["Crypto", "Commodities", "Stocks", "Indices"],
    },
    {
      title: "Accounts",
      lists: [
        "Standard Account",
        "Professional Account",
        "Portfolio Management Account",
        "Deposit & Withdrawal",
        "Fees",
      ],
    },
    {
      title: "Tools",
      lists: ["Excel App", "MetaTrader 4", "MetaTrader 5", "MetaTrader Mobile"],
    },
    {
      title: "More",
      lists: ["Excel App", "MetaTrader 4", "MetaTrader 5", "MetaTrader Mobile"],
    },
  ];

  return (
    <div className="bg-base-200 text-base-content p-3 md:p-10">
      <footer className="footer max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-5">
          {footerlist.map((section, sectionIndex) => (
            <nav key={sectionIndex}>
              <h6 className="footer-title">{section.title}</h6>
              <ul className="list-disc">
                {section.lists.map((listItem, listIndex) => (
                  <li className="list-none" key={listIndex}>
                    <a
                      href="#"
                      className="link link-hover text-[0.65rem] font-bold">
                      {listItem}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </footer>
      <div className="divider mx-auto max-w-7xl"></div>
      <footer className="footer max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 mb-7 md:mb-auto">
          <div className="md:col-span-4 flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="md:w-full w-full md:px-0 px-8 md:pb-0 pb-8">
              <Link
                to="/"
                className="font-extrabold flex items-center text-xl justify-center md:justify-start">
                <img src={Excellogo} className="w-8 h-8" alt="Excel logo" />
                <span className="uppercase font-bold text-blue-800 text-2xl ml-2">
                  Excelexchange
                </span>
              </Link>
              <div className="flex justify-between gap-2 mt-4 w-full">
                {socialLinks.slice(0, 5).map((social, index) => (
                  <Link
                    key={index}
                    to={social.link}
                    className="rounded-full outline-[0.02rem] outline dark:outline-gray-300 p-2 hover:outline-blue-800 hover:scale-110 flex justify-center items-center ease-in-out duration-200">
                    {social.icon}
                  </Link>
                ))}
              </div>
              <div className="flex justify-between gap-2 mt-10 md:mt-4 w-full">
                {socialLinks.slice(5, 10).map((social, index) => (
                  <Link
                    key={index}
                    to={social.link}
                    className="rounded-full outline-[0.02rem] outline dark:outline-gray-300 p-2 hover:outline-blue-800 hover:scale-110 flex justify-center items-center ease-in-out duration-200">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-justify text-[0.7rem] font-bold">
            <p>
              Excelexchange is a Securities Dealer registered in... with
              registration number... and authorised by the Financial Services
              Authority (FSA) with licence number... The registered office of
              Excel exchange Ltd ...
            </p>
            <p>
              Excelexchange is authorised by the Financial Services Commission
              (FSC) in BVI with registration number... and investment business
              licence number... The registered office of Excelexchange is...
            </p>
            <p>
              Risk Warning: Our services relate to complex derivative products
              which are traded outside an exchange. These products come with a
              high risk of losing money rapidly due to leverage and thus are not
              appropriate for all investors. Under no circumstances shall
              Excelexchange have any liability to any person or entity for any
              loss or damage in whole or part caused by, resulting from, or
              relating to any investing activity. Learn more.
            </p>
            <p>
              The information on this website does not constitute investment
              advice or a recommendation or a solicitation to engage in any
              investment activity.
            </p>
            <p>
              Excelexchange complies with the Payment Card Industry Data
              Security Standard (PCI DSS) to ensure your security and privacy.
              We conduct regular vulnerability scans and penetration tests in
              accordance with the PCI DSS requirements for our business model.
            </p>
          </div>
        </div>
      </footer>
      <div className="divider mx-auto max-w-7xl"></div>
      <footer className="footer bg-base-200 text-base-content max-w-7xl mx-auto">
        <aside className="grid flow-col items-center text-[0.7rem] justify-between w-full font-bold">
          <Link to="">Risk Disclosure</Link>
          <Link to="">Privacy Agreement</Link>
          <Link to="">Preventing Money Laundering</Link>
          <Link to="">© 2023 excelexchange.com</Link>
          <Link to="">All Right Reserved</Link>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
