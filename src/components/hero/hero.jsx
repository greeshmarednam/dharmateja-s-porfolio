import React from "react";
import styles from "../../scss/hero/hero.module.scss";
import Lottie from "lottie-react";

import HeroAnimation from "../../assests/lottie/hero-ani.json";
import Button from "../common/buttons/buttons";
import SocialMediaIcons from "../common/social_media_icons/social_media_icons";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.hero_left}>
        <div className={styles.name}>Hi, I'm Dharma Teja N</div>
        <div className={styles.slogan}>
          Turning Ideas Into Reality With Code.
        </div>
        <Button text={"Contact Me"} button_theme={"light"} onclick={() => {}} />
        <div className={styles.SocialMediaIcons_group}>
          <SocialMediaIcons
            icon={<FaFacebookF />}
            tooltip_content={"facebook.com/dharmatejan.dev"}
            tooltip_title={"FaceBook"}
          />
          <SocialMediaIcons
            icon={<FaInstagram />}
            tooltip_title={"Instagram"}
            tooltip_content={"instagram.com/dharmatejan.dev"}
          />
          <SocialMediaIcons
            icon={<FaLinkedinIn />}
            tooltip_content={"linkedin.com/dharmatejan.dev"}
            tooltip_title={"LinkedIn"}
          />
          <SocialMediaIcons
            icon={<FaWhatsapp />}
            tooltip_content={"wa.me/dharmatejan"}
            tooltip_title={"WhatsApp"}
          />
          <SocialMediaIcons
            icon={<FaGithub />}
            tooltip_content={"github.com/dharmatejan.dev"}
            tooltip_title={"GitHub"}
          />
        </div>
      </div>
      <div className={styles.hero_right}>
        <Lottie
          animationData={HeroAnimation}
          loop={true}
          autoPlay={true}
          className={styles.anim}
        />
      </div>
    </div>
  );
};

export default HeroSection;
