import React from "react";
import styles from "../../../scss/social_media_icons/social_media_icons.module.scss";
import { Tooltip } from "react-tooltip";
const SocialMediaIcons = ({
  icon,
  onclick,
  theme,
  tooltip_content,
  tooltip_title,
}) => {
  return (
    <div>
      <div
        className={theme === "dark" ? styles.dark_icon : styles.light_icon}
        data-tooltip-id={tooltip_content}
        onClick={onclick}
        data-tooltip-place="top"
      >
        <div className={styles.icon}>{icon}</div>
      </div>
      <Tooltip id={tooltip_content} className={styles.tooltip} place="top">
        {tooltip_title} | {tooltip_content}
      </Tooltip>
    </div>
  );
};

export default SocialMediaIcons;
