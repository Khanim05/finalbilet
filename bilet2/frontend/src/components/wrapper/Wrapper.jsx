import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import wrapper from "./wrapper.module.css";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Wrapper = () => {

  let {basketPrduct}=useSelector(p=>p.basket)
  let total=basketPrduct.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div className={wrapper.area}>
      <div className={wrapper.basket}>
        <Link to="/wishlist">
          <FaHeart className={wrapper.icon} />
          <sup>0</sup>
        </Link>
        <Link to="/basket">
          <FaShoppingBasket className={wrapper.icon} />
          <sup>{total}</sup>
        </Link>
      </div>
      <ul className={wrapper.menu}>
        <li>
          <RxHamburgerMenu className={wrapper.sidebar} />
          <ul className={wrapper.dropdown}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/special">Special</Link>
            </li>
            <li>
              <Link to="/testi">Testimonials</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Wrapper;
