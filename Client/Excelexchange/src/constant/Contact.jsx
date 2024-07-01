import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="fixed right-4 bottom-10 w-10 h-10 outline rounded-full p-1">
      <Link target="_blank" to="https://whatsapp.com/+2348138553465">
        <FaWhatsapp size="30" />
      </Link>
    </div>
  );
}
