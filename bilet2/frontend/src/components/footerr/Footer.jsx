import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";

import { FaTwitterSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section id="footer-area">
        <div className="footer">
          <div className="about">
            <h2>About us</h2>
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              fuga consequuntur alias molestiae, hic distinctio aut harum nulla
              nihil? Ex.
            </p>
          </div>
          <div className="about">
            <h2>Quick Links</h2>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact us</a>
          </div>
          <div className="about">
            <h2>Follow us</h2>
            <div className="icon-area">
              <FaFacebook className="icon" />
              <FaSquareInstagram className="icon" />
              <FaTwitterSquare className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="about">
            <h2>Featured Product</h2>
            <img
              src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
              alt=""
              className="image"
            />
            <p className="title">Leather Brown Shoe</p>
            <p className="price">$60.00</p>
            <button className="add-cart">Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
