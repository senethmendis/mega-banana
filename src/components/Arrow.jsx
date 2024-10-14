import React from "react";
import { motion } from "framer-motion";

const Arrow = ({ height = "35px", width = "35px" }) => {
  return (
    <motion.svg
      fill="#fde047"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      id="memory-arrow-up"
      initial={{ rotate: -90 }}
      animate={{ x: -5 }}
    >
      <path d="M10 5H12V6H13V7H14V8H15V9H16V11H14V10H13V9H12V18H10V9H9V10H8V11H6V9H7V8H8V7H9V6H10" />
    </motion.svg>
  );
};

export default Arrow;
