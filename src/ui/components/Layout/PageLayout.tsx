import React, { FunctionComponent } from "react";
import { DesktopNavigation } from "../DesktopNavigation/DesktopNavigation";
import styles from "./PageLayout.module.scss";

export const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.page}>
      <DesktopNavigation />
      <div className={styles.wrapper}>
        <main className={styles["page-content"]}>{children}</main>
      </div>
    </div>
  );
};
