import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles, Statuses } from "./types";
import { Filters, Filter, FilterTypes } from "../Filters";
import { PersonInterface } from "../Person/Person";
import { createFilters } from "./helpers/createFilters";

export class PeopleContainer extends React.Component<{}, PeopleContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: [],
      filters: [
        ...createFilters("role", Object.values(Roles)),
        ...createFilters("status", Object.values(Statuses))
      ]
    };
  }

  componentDidMount = async () => {
    const { filters } = this.state;
    const people = await peopleManager.get(filters);

    this.setState({ people });
  };

  handleCheckboxChange = (filterType: FilterTypes) => async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { filters } = this.state;

    filters.map(filter => {
      if (filter.filterType !== filterType) {
        filter.isChecked = false;
      }

      if (filter.filterName === e.currentTarget.name) {
        filter.isChecked = e.currentTarget.checked;
      }

      return filter;
    });

    const people = await peopleManager.get(filters);

    this.setState({ people, filters });
  };

  render() {
    const { people, filters } = this.state;

    return (
      <>
        <Filters
          filterType="role"
          filterNames={Object.values(Roles)}
          filters={filters}
          handleCheckboxChange={this.handleCheckboxChange("role")}
        />
        <Filters
          filterType="status"
          filterNames={Object.values(Statuses)}
          filters={filters}
          handleCheckboxChange={this.handleCheckboxChange("status")}
        />
        <People key={filters.length} people={people} />
      </>
    );
  }
}

interface PeopleContainerState {
  people: PersonInterface[];
  filters: Filter[];
}
