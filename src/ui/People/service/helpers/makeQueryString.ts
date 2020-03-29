import { Filter } from "../../../components/Control/Filters";
import { groupBy } from "lodash";

export const makeQueryString = (filters: Filter[]) => {
  const checkedFilters = filters.filter((filter) => filter.isChecked);

  if (checkedFilters.length === 0) {
    return "";
  }

  const groupedFilters = groupBy(checkedFilters, (filter) => filter.filterType);

  return Object.entries(groupedFilters).map(
    ([key, value]) => `/${key}/${value.map((v) => v.filterName).join(",")}`
  );
};
