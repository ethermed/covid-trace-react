import React, { FunctionComponent } from "react";
import styles from "./DesktopNavigation.module.scss";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notifications.svg";
import { ReactComponent as PeopleIcon } from "../../../assets/icons/people.svg";
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
            <NotificationIcon />
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/heatmap" className={styles.button}>
            <MapIcon />
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/" className={styles.button}>
            <PeopleIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
