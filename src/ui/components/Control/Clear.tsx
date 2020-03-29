import React, { FunctionComponent } from "react";
import styles from "./Control.module.scss";
import { ReactComponent as ClearIcon } from "../../../assets/icons/clear-icon.svg";
export const Clear: FunctionComponent = () => {
  return (
    <div className={styles.clear__wrapper}>
      <button className={styles.clear__container}>
        <div className="label">CLEAR</div>
        <ClearIcon />
      </button>
    </div>
  );
};
