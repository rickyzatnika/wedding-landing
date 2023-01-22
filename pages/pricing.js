import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  return (
    <>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeInUp}>
          <h1 className="text-5xl text-indigo-500">Pricing</h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Pricing;
