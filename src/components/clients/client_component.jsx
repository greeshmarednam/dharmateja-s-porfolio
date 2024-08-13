import React from "react";
import styles from "../../scss/clients/client_component.module.scss";

export const ClientComponent = ({ logo, text }) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt={text} className={styles.logo} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
