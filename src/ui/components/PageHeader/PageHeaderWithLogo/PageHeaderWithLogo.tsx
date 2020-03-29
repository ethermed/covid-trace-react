import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import styles from "../PageHeader.module.scss";
import { PageHeaderInterface } from "../PageHeader.interface";
import { ReactComponent as LogoIcon } from "../../../../assets/icons/logo.svg";

export const PageHeaderWithLogo: FunctionComponent<PageHeaderInterface> = ({
  headline,
}) => {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <header className={styles.header}>
      <button className={styles.btn} onClick={handleClick}>
        <LogoIcon />
      </button>
      <h1 className="txt__h2">{headline}</h1>
    </header>
  );
};
