import React, { FunctionComponent, useState } from "react";
import styles from "./Control.module.scss";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter-list-icon.svg";

enum SortStateEnum {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export const Sort: FunctionComponent = () => {
  const [sortState, setSortState] = useState(SortStateEnum.CLOSED);

  function handleClick() {
    switch (sortState) {
      case SortStateEnum.CLOSED: {
        setSortState(SortStateEnum.OPEN);
        break;
      }
      case SortStateEnum.OPEN: {
        setSortState(SortStateEnum.CLOSED);
        break;
      }

      default:
        break;
    }
  }
  return (
    <div className={styles.sort__wrapper}>
      <button
        onClick={handleClick}
        data-state={sortState}
        className={styles.sort__container}
      >
        <div className="label">SORT</div>
        <FilterIcon />
      </button>
    </div>
  );
};
