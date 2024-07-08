import { motion } from "framer-motion";
import { FaQrcode } from "react-icons/fa";
import { Button } from "../ui/moving-border";

// eslint-disable-next-line react/prop-types
export default function Buttons({ tittle, icon: Icon = FaQrcode, bgColor = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98, rotateY: "2deg" }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="justify-center items-center">
      <Button
        className={`transition-all duration-300 font-extrabold ${bgColor}`}>
        {tittle}
        <Icon className="px-2 text-3xl" />
      </Button>
    </motion.div>
  );
}
