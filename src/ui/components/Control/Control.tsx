import * as React from "react";
import styles from "./Control.module.scss";

export const Control = ({ children }: ControlProps) => (
  <div className={styles.control}>{children}</div>
);

interface ControlProps {
  children: JSX.Element | JSX.Element[];
}
