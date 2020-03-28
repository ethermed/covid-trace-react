import * as React from "react";

export const Filters = ({
  filters,
  filterType,
  handleCheckboxChange
}: FiltersProps) => {
  const filtersForCurrentFilterType = filters.filter(
    filter => filter.filterType === filterType
  );

  return (
    <div>
      <h2>{filterType}</h2>
      {filtersForCurrentFilterType.map(filter => {
        const { filterName, isChecked } = filter;

        return (
          <React.Fragment key={filterName}>
            <label>
              {filterName}
              <input
                name={filterName}
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
