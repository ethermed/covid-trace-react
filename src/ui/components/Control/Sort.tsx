import React, { useState } from "react";
import styles from "./Control.module.scss";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter-list-icon.svg";
import { SortTypes } from "../../enums/SortTypes.enum";

enum SortStateEnum {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export const Sort = ({ onChangeSortType }: SortProps) => {
  const [sortState, setSortState] = useState(SortStateEnum.CLOSED);

  const handleSortChange = (sortType: SortTypes) => () => {
    onChangeSortType(sortType);

    setSortState(SortStateEnum.CLOSED);
  };

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

      {sortState === SortStateEnum.OPEN && (
        <ul
          style={{
            listStyleType: "none",
            backgroundColor: "white",
            position: "absolute",
            padding: "5px",
            border: "1px solid lightgrey",
          }}
        >
          {Object.values(SortTypes).map((type) => {
            return (
              <li key={type}>
                <button
                  style={{ textTransform: "uppercase" }}
                  onClick={handleSortChange(type)}
                >
                  {type}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

interface SortProps {
  onChangeSortType(sortType: SortTypes): void;
}
