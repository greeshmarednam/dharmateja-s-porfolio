import React from "react";
import styles from "../../scss/contact/contact.module.scss";
import Button from "../common/buttons/buttons";
import Animation from "../../assests/lottie/contact.json";
import { SocailMediaVertical } from "../common/social_media_icons/socail_media_vertical";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.left}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.contact_mail}>contact@dharmatejan.in</div>
        <div action="" method="post" className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name" />
          <input
            type="tel"
            name=""
            id=""
            className={styles.input}
            placeholder="Contact Number"
          />
          <input
            type="text"
            name=""
            id=""
            className={styles.input}
            placeholder="Service Type"
          />

          <textarea
            type=""
            name=""
            id=""
            className={styles.input}
            placeholder="Message"
            rows="6"
            style={{ height: "100px" }}
          />
          <Button
            text={"Contact Me"}
            button_theme={"dark"}
            onclick={() => {}}
          />
        </div>
      </div>
      <div className={styles.right}>
        <Lottie
          animationData={Animation}
          loop={true}
          autoPlay={true}
          className={styles.anim}
        />
        <div className={styles.socialmedia}>
          <div className={styles.socialmedia_row}>
            <SocailMediaVertical
              icon={<IoMailOpen />}
              title={"Mail"}
              username={"contact@dharmatejan.in"}
            />
            <SocailMediaVertical
              icon={<FaInstagram />}
              title={"Instagram"}
              username={"@dharmatejan-dev"}
            />
            <SocailMediaVertical
              icon={<FaGithub />}
              title={"GitHub"}
              username={"github.com/dharmateja-dev"}
            />
          </div>
          <div className={styles.socialmedia_row}>
            <SocailMediaVertical
              icon={<FaLinkedin />}
              title={"LinkedIn"}
              username={"@dharmatejan-dev"}
            />
            <SocailMediaVertical
              icon={<FaWhatsapp />}
              title={"Whatsapp"}
              username={"+91 9951264256"}
            />
            <SocailMediaVertical
              icon={<FaFacebook />}
              title={"Facebook"}
              username={"@dharmatejan-dev"}
            />
          </div>
          <div className={styles.socialmedia_row}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
