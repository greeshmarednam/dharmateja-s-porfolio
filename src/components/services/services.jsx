import React from "react";
import { ServiceComponent } from "./serviceComponent";

import styles from "../../scss/services/services.module.scss";
import Slider from "react-slick";

import web from "../../assests/images/website.png";
import ui from "../../assests/images/ui.png";
import android from "../../assests/images/android.png";
import webapp from "../../assests/images/webapp.png";

export const Services = () => {
  var setttings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.main}>
      <div className={styles.title}>Services</div>
      <Slider {...setttings}>
        <ServiceComponent
          title={"Web Development"}
          image={web}
          subtitle={"Building Robust and Scalable Websites"}
          content={
            "I specialize in developing high-quality, robust, and scalable websites tailored to meet your unique needs. From simple landing pages to complex web platforms, I ensure that your website is efficient, secure, and user-friendly."
          }
          hovertext={
            <ul className={styles.content}>
              <li className={styles.subtitle}>Key Services:</li>
              <li>Custom Website Development</li>
              <li>E-commerce Solutions</li>
              <li>CMS Coustomization</li>
              <li>API Development ad Integration</li>
              <li>Website Maintenance and Support</li>
            </ul>
          }
        />
        <ServiceComponent
          title={"UI/UX Design"}
          image={ui}
          subtitle={"Enhancing User Experience with Intuitive Interfaces"}
          content={
            "User experience is at the heart of my design process. I create intuitive and engaging interfaces that provide a seamless user experience. By understanding user behavior and needs, I design interfaces that are both aesthetically pleasing and highly functional."
          }
          hovertext={
            <ul className={styles.content}>
              <li className={styles.subtitle}>Key Services:</li>
              <li>User Research and Analysis</li>
              <li>Wireframing and Prototyping</li>
              <li>Interaction Design</li>
              <li>Usability Testing</li>
              <li>Visual Design</li>
            </ul>
          }
        />
        <ServiceComponent
          title={"Web Applications"}
          image={webapp}
          subtitle={"Creating Dynamic and Interactive Web Applications"}
          content={
            "I specialize in developing high-quality, robust, and scalable websites tailored to meet your unique needs. From simple landing pages to complex web platforms, I ensure that your website is efficient, secure, and user-friendly."
          }
          hovertext={
            <ul className={styles.content}>
              <li className={styles.subtitle}>Key Services:</li>
              <li>Custom Website Development</li>
              <li>E-commerce Solutions</li>
              <li>CMS Integration (WordPress, Drupal, etc.)</li>
              <li>API Development ad Integration</li>
              <li>Website Maintenance and Support</li>
            </ul>
          }
        />
        <ServiceComponent
          title={"Mobile Application Development"}
          image={android}
          subtitle={"Developing High-Performance Mobile Apps"}
          content={
            "I develop high-performance mobile applications for both Android and iOS platforms. My apps are designed to deliver a smooth and engaging user experience, leveraging the latest technologies and best practices in mobile development."
          }
          hovertext={
            <ul className={styles.content}>
              <li className={styles.subtitle}>Key Services:</li>
              <li>Native App Development (iOS and Android)</li>
              <li>Cross-Platform App Development</li>
              <li>UI/UX Design for Mobile Apps</li>
              <li>App Testing and Quality Assurance</li>
              <li>App Maintenance and Support</li>
            </ul>
          }
        />
      </Slider>
    </div>
  );
};
