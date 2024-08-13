import React from "react";
import styles from "../../scss/services/service_component.module.scss";

export const ServiceComponent = ({
  title,
  subtitle,
  image,
  content,
  hovertext,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main_content}>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.hovertext}>{hovertext}</div>
      </div>
    </div>
  );
};
