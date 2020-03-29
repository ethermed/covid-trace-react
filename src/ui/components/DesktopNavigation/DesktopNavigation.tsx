import React, { FunctionComponent } from "react";
import styles from "./DesktopNavigation.module.scss";
import { ReactComponent as ChatIcon } from "../../../assets/icons/chat.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/list.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg";
import { Link } from "react-router-dom";

export const DesktopNavigation: FunctionComponent = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles["item-container"]}>
        <li className={styles["nav-item"]}>
          <Link className={styles.button} to="/">
            <MenuIcon />
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link className={styles.button} to="/">
            <ChatIcon />
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/heatmap">
            <button className={styles.button}>
              <MapIcon />
            </button>
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/">
            <button className={styles.button}>
              <ListIcon />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
