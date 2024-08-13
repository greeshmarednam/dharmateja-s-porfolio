import React from "react";
import styles from "../..//scss/bottomnavigation/bottomnavigation.module.scss";

import logo_light from "../../assests/logos/logo_light.png";
const BottomNavigation = () => {
  return (
    <div className={styles.main}>
      <ul>
        <img src={logo_light} alt="" className={styles.logo} />
      </ul>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About </li>
        <li>Skills </li>
        <li>Projects </li>
        <li>Contact Me</li>
      </ul>
      <ul className={styles.quick_links}>
        <li className={styles.title}>Quick Links</li>
        <li>GitHub</li>
        <li>Figma</li>
        <li>Mail</li>
        <li>Server</li>
        <li>LMS</li>
      </ul>
      <ul className={styles.contact}>
        <li className={styles.title}>Contact Me</li>
        <li>+91 9951264256</li>
        <li>contact@dharmatejan.in</li>
      </ul>
      <ul className={styles.address}>
        <li className={styles.title}>Address</li>
        <li>Srikakulam</li>
        <li>A.P., India</li>
      </ul>
    </div>
  );
};

export default BottomNavigation;
