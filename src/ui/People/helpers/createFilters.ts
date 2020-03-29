import { FilterTypes, Filter } from "../../components/Control/Filters";

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
