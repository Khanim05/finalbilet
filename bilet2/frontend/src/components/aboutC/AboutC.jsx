import React from "react";
import "./about.css";

const AboutC = () => {
  return (
    
      <section id="about-area">
        <div className="about">
           <div className="img-area">
          <img className="image"
            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg
          "
            alt=""
          />
          <div className="position1">
            <h2>Trusted Merchant</h2>
            <p>for 50 years</p>
          </div>
        </div>
        <div className="content">
          <p className="name">Merchant Company</p>
          <h2 className="title">About Us</h2>
          <p className="txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            placeat voluptas illum soluta ad distinctio corrupti perferendis
            esse asperiores molestias!
          </p>
          <button>Learn More</button>
        </div>
        </div>
       
      </section>
  );
};

export default AboutC;
