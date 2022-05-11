import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

function OurWork() {
  return (
    <Work>
      <Movie>
        <h2>The athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>The goodtimes</h2>
        <div className="line"></div>
        <Link to="/work/goodtimes">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  /* background: white; */
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
  }
`;

export default OurWork;
