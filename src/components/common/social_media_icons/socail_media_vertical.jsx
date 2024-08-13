import React from "react";
import styles from "../../../scss/social_media_icons/social_media_icons_vertical.module.scss";

export const SocailMediaVertical = ({ icon, title, username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.username}>{username}</div>
      </div>
    </div>
  );
};
