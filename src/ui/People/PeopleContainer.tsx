import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles } from "../enums/Roles.enum";
import { Statuses } from "../enums/Statuses.enum";
import { Filters, Filter } from "../components/Control/Filters";
import { PersonInterface } from "../types/Person.interface";
import { createFilters } from "./helpers/createFilters";
import { Control } from "../components/Control/Control";

export class PeopleContainer extends React.Component<
  PeopleContainerProps,
  PeopleContainerState
> {
  constructor(props: PeopleContainerProps) {
    super(props);

    this.state = {
      filters: [
        ...createFilters("role", Object.values(Roles)),
        ...createFilters("status", Object.values(Statuses)),
      ],
    };
  }

  handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { filters } = this.state;
    const { updatePeople } = this.props;

    const currentFilter = filters.find(
      (filter) => e.currentTarget.name === filter.filterName
    );

    currentFilter!.isChecked = e.target.checked;

    const people = await peopleManager.get(filters);

    updatePeople(people);
    this.setState({ filters });
  };

  render() {
    const { people } = this.props;
    const { filters } = this.state;

    return (
      <>
        <Control>
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
        </Control>
        <People key={filters.length} people={people} />
      </>
    );
  }
}

interface PeopleContainerProps {
  people: PersonInterface[];
  updatePeople(people: PersonInterface[]): void;
}

interface PeopleContainerState {
  filters: Filter[];
}
