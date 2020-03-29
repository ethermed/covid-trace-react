import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import styles from "../PageHeader.module.scss";
import { PageHeaderInterface } from "../PageHeader.interface";
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow_back.svg";

export const PageHeaderWithBackBtn: FunctionComponent<PageHeaderInterface> = ({
  headline,
}) => {
  const history = useHistory();
  function handleClick() {
    history.goBack();
  }
  return (
    <header className={classnames([styles.header, styles["no-margin"]])}>
      <button className={styles.btn} onClick={handleClick}>
        <ArrowIcon />
      </button>
      <h1 className="txt__h2">{headline}</h1>
    </header>
  );
};
