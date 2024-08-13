import React from "react";
import styles from "../../scss/skills/skills.module.scss";
import SkillComponent from "./skillcomponent";
import ReactLogo from "../../assests/images/react.png";
import html from "../../assests/images/html.png";
import css from "../../assests/images/css.png";
import django from "../../assests/images/django.png";
import firebase from "../../assests/images/firebase.png";
import flutter from "../../assests/images/flutter.png";
import nextjs from "../../assests/images/nextjs.png";
import python from "../../assests/images/python.png";
import rest from "../../assests/images/rest.png";
import sass from "../../assests/images/sass.png";
import tailwind from "../../assests/images/tailwind.png";

import Slider from "react-slick";

const Skills = () => {
  var setttings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 9,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
  };

  return (
    <div className={styles.main} id="skill">
      <div className={styles.title}>Skills</div>
      <div className={styles.slider}>
        <Slider {...setttings}>
          <SkillComponent logo={ReactLogo} text={"React"} />
          <SkillComponent logo={html} text={"HTML"} />
          <SkillComponent logo={css} text={"CSS"} />
          <SkillComponent logo={python} text={"Python"} />
          <SkillComponent logo={django} text={"Django"} />
          <SkillComponent logo={flutter} text={"Flutter"} />
          <SkillComponent logo={rest} text={"Rest"} />
          <SkillComponent logo={sass} text={"SASS"} />
          <SkillComponent logo={firebase} text={"Firebase"} />
          <SkillComponent logo={nextjs} text={"NextJs"} />
          <SkillComponent logo={tailwind} text={"Tailwind CSS"} />
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
