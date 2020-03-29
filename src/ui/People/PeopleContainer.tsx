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
import styles from "./PeopleContainer.module.scss";
import { StatusBar } from "../StatusBar";
import { SampleAtRiskData } from "../../mockData/statusdata";
import { Sort } from "../components/Control/Sort";
import { Clear } from "../components/Control/Clear";
import { ApiContent } from "../types/ApiContent";
import { SortTypes } from "../enums/SortTypes.enum";
import { sortPeople } from "./helpers/sortPeople";
import { makePeopleSearchable } from "./helpers/makePeopleSearchable";

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
      sortType: SortTypes.STATUS,
    };
  }

  componentDidMount() {
    const searchablePeople = makePeopleSearchable(this.props.people);

    this.setState({ searchablePeople });
  }

  componentDidUpdate(prevProps: PeopleContainerProps) {
    if (!isEqual(prevProps.people, this.props.people)) {
      const searchablePeople = makePeopleSearchable(this.props.people);

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

  handleChangeSortType = (sortType: SortTypes) => {
    this.setState({ sortType });
  };

  handleClearClick = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { people } = this.props;
    const { filters, searchTerm, searchablePeople, sortType } = this.state;

    let filteredPeople;

    if (!!searchTerm) {
      const filteredIds = searchablePeople
        .filter((person) => person.searchData.includes(searchTerm))
        .map((person) => person.id);

      filteredPeople = people.filter((person) =>
        filteredIds.includes(person.id)
      );
    }

    filteredPeople = !!filteredPeople ? filteredPeople : people;

    const sortedPeople = sortPeople(sortType, filteredPeople);
    return (
      <div className={styles.wrapper}>
        <Control>
          <div className={styles.filters__container}>
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
          </div>
          <Sort onChangeSortType={this.handleChangeSortType} />
          <Clear onClick={this.handleClearClick} />
        </Control>
        <StatusBar data={SampleAtRiskData} />
        <People key={filters.length} people={filteredPeople} />
      </div>
    );
  }
}

interface PeopleContainerProps {
  people: PersonInterface[];
  updatePeople(people: ApiContent<PersonInterface[]>): void;
}

interface PeopleContainerState {
  sortType: SortTypes;
  searchTerm: string;
  filters: Filter[];
  searchablePeople: { id: number; searchData: string }[];
}
