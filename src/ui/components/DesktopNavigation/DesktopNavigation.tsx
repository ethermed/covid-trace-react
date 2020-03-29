import React, { FunctionComponent } from "react";
import styles from "./DesktopNavigation.module.scss";

import { ReactComponent as ChatIcon } from "../../../assets/icons/chat.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/list.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg";

export const DesktopNavigation: FunctionComponent = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles["item-container"]}>
        <li className={styles["nav-item"]}>
          <button className={styles.button}>
            <MenuIcon />
          </button>
        </li>
        <li className={styles["nav-item"]}>
          <button className={styles.button}>
            <ChatIcon />
          </button>
        </li>
        <li className={styles["nav-item"]}>
          <button className={styles.button}>
            <MapIcon />
          </button>
        </li>
        <li className={styles["nav-item"]}>
          <button className={styles.button}>
            <ListIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};
