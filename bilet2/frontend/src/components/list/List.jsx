import React from "react";
import { Link } from "react-router";
import styles from "./list.module.css";

const List = () => {
  return (
    <div>
      <section id="list_area">
        <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
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
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      </section>
      
    </div>
  );
};

export default List;
