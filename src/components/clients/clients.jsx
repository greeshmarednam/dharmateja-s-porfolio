import React from "react";
import styles from "../../scss/clients/clients.module.scss";
import Slider from "react-slick";
import { ClientComponent } from "./client_component";

import sita from "../../assests/images/sitalax.png";
import inavap from "../../assests/images/inavap.png";
import radhika from "../../assests/images/radhika.png";
import dcm from "../../assests/images/dcm.png";
import digitalwom from "../../assests/images/digitalwom.jpg";

export const Clients = () => {
  var setttings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: true,
  };

  return (
    <div className={styles.main} id="clients">
      <div className={styles.title}>Clients</div>
      <Slider {...setttings}>
        <ClientComponent logo={sita} text={"Sri SitaLaxmi Enterprises"} />
        <ClientComponent
          logo={radhika}
          text={"Dr.Radhika Multispeciality Hospitals"}
        />
        <ClientComponent logo={inavap} text={"Inavap Solutions"} />
        <ClientComponent logo={dcm} text={"Delta Cargo Movers"} />
        <ClientComponent logo={digitalwom} text={"DigitalWoM"} />
      </Slider>
    </div>
  );
};
