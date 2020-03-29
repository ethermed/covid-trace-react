import React from "react";
import styles from "./Control.module.scss";
import { ReactComponent as ClearIcon } from "../../../assets/icons/clear-icon.svg";

export const Clear = ({ onClick }: ClearProps) => {
  return (
    <div className={styles.clear__wrapper}>
      <button onClick={onClick} className={styles.clear__container}>
        <div className="label">CLEAR</div>
        <ClearIcon />
      </button>
    </div>
  );
};

interface ClearProps {
  onClick(): void;
}
