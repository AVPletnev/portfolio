import React from "react";
import home1 from "../img/home1.png";
//Styled
import {About, Description, Hide, Image} from '../styles'

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
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
