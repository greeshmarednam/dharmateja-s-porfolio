import React from "react";
import styles from "../../scss/footer/footer.module.scss";
import SocialMediaIcons from "../common/social_media_icons/social_media_icons";
import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright @2024{" "}
        <span className={styles.name}>Dharma Teja Neralla.</span>
      </div>
      <div className={styles.contacts}>
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
        <SocialMediaIcons
          icon={<IoMailOpen />}
          tooltip_content={"contact@dharmatejan.in"}
          tooltip_title={"Mail"}
        />
        <SocialMediaIcons
          icon={<FaPhone />}
          tooltip_content={"+91 9951264256"}
          tooltip_title={"Phone"}
        />
      </div>
    </div>
  );
};

export default Footer;
