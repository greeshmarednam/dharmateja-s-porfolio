import React from "react";
import styles from "../../../scss/buttons/buttons.module.scss";
const Button = ({ text, button_theme, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={button_theme === "dark" ? styles.dark : styles.light}
    >
      {text}
    </div>
  );
};

export default Button;
