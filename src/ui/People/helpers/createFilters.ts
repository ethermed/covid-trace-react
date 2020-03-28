import { FilterTypes, Filter } from "../../Filters";

export const createFilters = (
  filterType: FilterTypes,
  names: string[]
): Filter[] => {
  return names.map(name => ({
    filterType,
    filterName: name,
    isChecked: false
  }));
};
