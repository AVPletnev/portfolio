import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnim,
  fade,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";


function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} ref={element} initial="hidden">
        <h2>The racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        ref={element2}
        initial="hidden"
      >
        <h2>The goodtimes</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
