import React from "react";
import styles from "../../scss/design/responsive_design.module.scss";
import Lottie from "lottie-react";
import Animation from "../../assests/lottie/responsive.json";

const ResponsiceDesign = () => {
  return (
    <div className={styles.design_main}>
      <div className={styles.left}>
        <div className={styles.title}>Responsive Design</div>
        <div className={styles.slogan}>Design Optimized For Every Device</div>
        <div className={styles.context}>
          Responsive design is essential for creating web pages that look great
          and function seamlessly on any device, whether it’s a desktop, tablet,
          or smartphone. My approach to responsive design focuses on
          flexibility, performance, and user experience.
        </div>
      </div>
      <div className={styles.right}>
        <Lottie
          animationData={Animation}
          loop={true}
          autoPlay={true}
          className={styles.anim}
        />
      </div>
    </div>
  );
};

export default ResponsiceDesign;
