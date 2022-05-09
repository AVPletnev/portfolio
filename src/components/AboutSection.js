import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt hic
          quae laborum error quis reiciendis blanditiis doloribus culpa et
          vitae!
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="home" />
      </div>
    </div>
  );
}

export default AboutSection;
