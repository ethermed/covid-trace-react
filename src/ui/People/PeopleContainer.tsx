import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles } from "../enums/Roles.enum";
import { Statuses } from "../enums/Statuses.enum";
import { Filters, Filter, FilterTypes } from "../components/Control/Filters";
import { PersonInterface } from "../types/Person.interface";
import { createFilters } from "./helpers/createFilters";
import { Control } from "../components/Control/Control";
import { SearchInput } from "../components/Control/SearchInput";
import { isEqual } from "lodash";
import styles from "./PeopleContainer.module.scss";
import { Sort } from "../components/Control/Sort";
import { Clear } from "../components/Control/Clear";
import { ApiContent } from "../types/ApiContent";
import { SortTypes } from "../enums/SortTypes.enum";
import { sortPeople } from "./helpers/sortPeople";
import { makePeopleSearchable } from "./helpers/makePeopleSearchable";
import { StatusBarContainer } from "../components/StatusBar/StatusBarContainer";

export class PeopleContainer extends React.Component<
  PeopleContainerProps,
  PeopleContainerState
> {
  constructor(props: PeopleContainerProps) {
    super(props);

    this.state = {
      searchTerm: "",
      searchablePeople: [],
      roleFilters: createFilters(FilterTypes.ROLE, Object.values(Roles)),
      statusFilters: createFilters(FilterTypes.STATUS, Object.values(Statuses)),
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

  handleCheckboxChange = (filterType: FilterTypes) => async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { updatePeople } = this.props;

    const filters = this.state[`${filterType}Filters`];

    const currentFilter = filters.find(
      (filter) => e.currentTarget.name === filter.filterName
    );

    currentFilter!.isChecked = e.target.checked;

    const people = await peopleManager.get(filters);

    // updatePeople(people);

    if (filterType === FilterTypes.ROLE) {
      this.setState({
        roleFilters: filters,
        statusFilters: this.state.statusFilters.map((filter) => ({
          ...filter,
          isChecked: false,
        })),
      });

      return;
    }

    this.setState({
      statusFilters: filters,
      roleFilters: this.state.roleFilters.map((filter) => ({
        ...filter,
        isChecked: false,
      })),
    });
  };

  handleChangeSortType = (sortType: SortTypes) => {
    this.setState({ sortType });
  };

  handleClearClick = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { people } = this.props;

    const {
      statusFilters,
      roleFilters,
      searchTerm,
      searchablePeople,
      sortType,
    } = this.state;

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
              filterType={FilterTypes.STATUS}
              filterNames={Object.values(Roles)}
              filters={statusFilters}
              handleCheckboxChange={this.handleCheckboxChange(
                FilterTypes.STATUS
              )}
            />
            <Filters
              filterType={FilterTypes.ROLE}
              filterNames={Object.values(Statuses)}
              filters={roleFilters}
              handleCheckboxChange={this.handleCheckboxChange(FilterTypes.ROLE)}
            />
            <SearchInput
              onChange={this.handleSearchChange}
              searchTerm={searchTerm}
            />
          </div>
          <Sort onChangeSortType={this.handleChangeSortType} />
          <Clear onClick={this.handleClearClick} />
        </Control>
        <StatusBarContainer />
        <People
          key={roleFilters.length + statusFilters.length}
          people={sortedPeople}
          areAtRiskPeople={false}
        />
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
  roleFilters: Filter[];
  statusFilters: Filter[];
  searchablePeople: { id: number; searchData: string }[];
}
