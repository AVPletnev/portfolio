import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
