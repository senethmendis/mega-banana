import React from "react";
import { motion } from "framer-motion";

const TitleScreen = ({ image, size = "w-[700px]" }) => {
  return (
    <motion.img
      animate={{
        opacity: [1, 0, 0, 1, 1],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      src={image}
      alt="logo"
      className={`${size} mx-auto`}
    />
  );
};

export default TitleScreen;
