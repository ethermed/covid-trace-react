import * as React from "react";

export const Filters = ({
  filterNames,
  filters,
  filterType,
  handleCheckboxChange
}: FiltersProps) => {
  return (
    <div>
      <h2>{filterType}</h2>
      {filterNames.map(name => {
        const isChecked = filters.find(filter => filter.filterName === name)
          ?.isChecked;

        return (
          <React.Fragment key={name}>
            <label>
              {name}
              <input
                name={name}
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

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

export type FilterTypes = "role" | "status";
