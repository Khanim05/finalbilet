import React from "react";
import "./service.css";
import { FaChartPie } from "react-icons/fa";
<FaChartPie />;
import { IoIosBackspace } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
<IoIosTimer />
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
<MdBusinessCenter />
import { SiIcloud } from "react-icons/si";
<SiIcloud />

const Service = () => {
  return (
    <div>
      <section id="service_area">
        <div className="content">
          <p className="header">Our Services</p>
          <h2 className="title">We Offer Services</h2>
        </div>
        <div className="service-product">
          <div className="product">
            <p>
              <FaChartPie className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="product">
            <p>
              <IoIosBackspace className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="product">
            <p>
              <IoIosTimer className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="product">
            <p>
              <MdBeenhere  className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="product">
            <p>
              <MdBusinessCenter  className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="product">
            <p>
              <SiIcloud className="icon" />
            </p>
            <div className="product-content">
              <p className="name">Business Consulting</p>
              <p className="president">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                dolore quidem quibusdam iusto tenetur ipsum aliquid dolorum
                labore cumque perspiciatis vel eius, consectetur enim neque!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
