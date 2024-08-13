import React from "react";
import styles from "../../scss/about/about.module.scss";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.content}>
        <div className={styles.title}>About Me</div>
        <div className={styles.text}>
          <div>
            I am a versatile freelancer with extensive skills and experience in
            web and Android development. I specialize in creating custom
            software solutions tailored to meet diverse business needs,
            including management tools such as CRM, LMS, HRM, and booking
            systems.
          </div>
          <div>
            With a focus on addressing your company’s unique challenges, I
            provide innovative solutions designed to enhance efficiency and
            drive growth. Whether you require a robust web application, a
            dynamic Android app, or specialized management software, I am
            committed to delivering high-quality results that solve your
            business problems and support your objectives.
          </div>
          <div>
            Let’s collaborate to turn your vision into reality and overcome your
            business challenges with cutting-edge technology!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
