import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactUs() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{}}>
      <h1>ContactUs</h1>
    </motion.div>
  );
}

export default ContactUs;
