import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Hide, Image } from "../styles";
//Framer motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt hic
          quae laborum error quis reiciendis blanditiis doloribus culpa et
          vitae!
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home" />
      </Image>
    </About>
  );
}

// styled component

export default AboutSection;
