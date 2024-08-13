import React from "react";
import styles from "../../scss/skills/skillcomponent.module.scss";

const SkillComponent = ({ logo, text }) => {
  return (
    <div className={styles.cointainer}>
      <img src={logo} alt={text} className={styles.logo} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SkillComponent;
