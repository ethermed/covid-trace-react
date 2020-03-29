import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles } from "../enums/Roles.enum";
import { Statuses } from "../enums/Statuses.enum";
import { Filters, Filter } from "../components/Control/Filters";
import { PersonInterface } from "../types/Person.interface";
import { createFilters } from "./helpers/createFilters";
import { Control } from "../components/Control/Control";
import { SearchInput } from "../components/Control/SearchInput";
import { isEqual } from "lodash";

export class PeopleContainer extends React.Component<
  PeopleContainerProps,
  PeopleContainerState
> {
  constructor(props: PeopleContainerProps) {
    super(props);

    this.state = {
      searchTerm: "",
      searchablePeople: [],
      filters: [
        ...createFilters("role", Object.values(Roles)),
        ...createFilters("status", Object.values(Statuses)),
      ],
    };
  }

  componentDidUpdate(prevProps: PeopleContainerProps) {
    if (!isEqual(prevProps.people, this.props.people)) {
      const searchablePeople = this.props.people.map((person) => {
        return {
          id: person.id,
          searchData: Object.values(person).join(" "),
        };
      });

      this.setState({ searchablePeople });
    }
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

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
    const { filters, searchTerm, searchablePeople } = this.state;

    const filteredIds = searchablePeople
      .filter((person) => person.searchData.includes(searchTerm))
      .map((person) => person.id);

    const filteredPeople = people.filter((person) =>
      filteredIds.includes(person.id)
    );
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
          <SearchInput
            onChange={this.handleSearchChange}
            searchTerm={searchTerm}
          />
        </Control>
        <People key={filters.length} people={filteredPeople} />
      </>
    );
  }
}

interface PeopleContainerProps {
  people: PersonInterface[];
  updatePeople(people: PersonInterface[]): void;
}

interface PeopleContainerState {
  searchTerm: string;
  filters: Filter[];
  searchablePeople: { id: number; searchData: string }[];
}
