import * as React from "react";
import classnames from "classnames";
import styles from "./Control.module.scss";

export class Filters extends React.Component<FiltersProps, FilterState> {
  constructor(props: FiltersProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { filterType, filters, handleCheckboxChange } = this.props;
    const { isOpen } = this.state;

    const filtersForCurrentFilterType = filters.filter(
      (filter) => filter.filterType === filterType
    );

    const isOpenClass = isOpen ? " is-open" : "";

    return (
      <div>
        <button
          onClick={this.handleClick}
          className={classnames([styles.filter + isOpenClass, "txt-upper"])}
        >
          {filterType}
        </button>

        {isOpen && (
          <ul
            style={{
              listStyleType: "none",
              backgroundColor: "white",
              position: "absolute",
              padding: "5px",
              border: "1px solid lightgrey",
            }}
          >
            {filtersForCurrentFilterType.map((filter) => {
              const { filterName, isChecked } = filter;

              return (
                <li key={filterName}>
                  <label>
                    <input
                      style={{ marginRight: "2px" }}
                      name={filterName}
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={isChecked}
                    />
                    {filterName}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

interface FiltersProps {
  filterNames: string[];
  filters: Filter[];
  filterType: FilterTypes;
  handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface Filter {
  filterType: FilterTypes;
  filterName: string;
  isChecked: boolean;
}

interface FilterState {
  isOpen: boolean;
}

export type FilterTypes = "role" | "status";
