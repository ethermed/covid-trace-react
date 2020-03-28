import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles, Statuses } from "./types";
import { Filters, Filter } from "../Filters";
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

  handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { filters } = this.state;

    const currentFilter = filters.find(
      filter => e.currentTarget.name === filter.filterName
    );

    currentFilter!.isChecked = e.target.checked;

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
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <Filters
          filterType="status"
          filterNames={Object.values(Statuses)}
          filters={filters}
          handleCheckboxChange={this.handleCheckboxChange}
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
