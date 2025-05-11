import React from "react";
import "./team.css";
import { FaFacebook } from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";

import { FaTwitterSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

const Tam = () => {
  return (
    <div>
      <section id="team_area">
        <div className="content">
          <p className="header">Team Our</p>
          <h2 className="title">Leadership</h2>
        </div>
        <div className="team-product">
          <div className="product">
            <img className="image"
              src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
              alt=""
            />
            <p className="name">John Rooster</p>
            <p className="president">CO-founder,President</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis provident asperiores officia quis temporibus quas
              tenetur iure repellendus at obcaecati nobis iusto delectus soluta
              voluptate ipsam rerum magni. Veniam?
            </p>
            <div className="icon-area">
              <FaFacebook className="icon" />
              <FaSquareInstagram className="icon" />
              <FaTwitterSquare className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="product">
            <img className="image"
              src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
              alt=""
            />
            <p className="name">John Rooster</p>
            <p className="president">CO-founder,President</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis provident asperiores officia quis temporibus quas
              tenetur iure repellendus at obcaecati nobis iusto delectus soluta
              voluptate ipsam rerum magni. Veniam?
            </p>
            <div className="icon-area">
              <FaFacebook className="icon" />
              <FaSquareInstagram className="icon" />
              <FaTwitterSquare className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="product">
            <img className="image"
              src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
              alt=""
            />
            <p className="name">John Rooster</p>
            <p className="president">CO-founder,President</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis provident asperiores officia quis temporibus quas
              tenetur iure repellendus at obcaecati nobis iusto delectus soluta
              voluptate ipsam rerum magni. Veniam?
            </p>
            <div className="icon-area">
              <FaFacebook className="icon" />
              <FaSquareInstagram className="icon" />
              <FaTwitterSquare className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tam;
