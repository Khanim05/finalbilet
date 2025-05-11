import React from "react";
import Logo from "../logo/Logo";
import List from "../list/List";
import Wrapper from "../wrapper/Wrapper";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbarArea}>
       <div className={styles.fixed}>
      <div className={styles.container}>
        <Logo />
        <List />
        <Wrapper />
      </div>
    </div>
    </section>
   
  );
};

export default Navbar;
