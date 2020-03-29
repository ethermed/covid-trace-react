import * as React from "react";
import { PersonInterface } from "./types/Person.interface";
// import { peopleManager } from "./People/service/PeopleManager";
import { PeopleContainer } from "./People/PeopleContainer";
import { StatusBar } from "./StatusBar";
import { Roles } from "./enums/Roles.enum";
import { Statuses } from "./enums/Statuses.enum";
import { PageLayout } from "./components/Layout/PageLayout";
import { peopleManager } from "./People/service/PeopleManager";

export class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount = async () => {
    await peopleManager.get([]);

    const people: PersonInterface[] = [
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.AT_RISK,
      },
      {
        id: 2,
        name: "billy",
        role: Roles.NURSE,
        status: Statuses.BEING_TESTED,
      },
      {
        id: 3,
        name: "billy",
        role: Roles.PATIENT,
        status: Statuses.OK,
      },
      {
        id: 4,
        name: "billy",
        role: Roles.STAFF,
        status: Statuses.INFECTED,
      },
      {
        id: 5,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.INFECTED,
      },
    ];

    this.setState({ people });
  };

  updatePeople = (people: PersonInterface[]) => {
    this.setState({ people });
  };

  render() {
    const { people } = this.state;

    return (
      <PageLayout>
        <StatusBar people={people} />
        <PeopleContainer updatePeople={this.updatePeople} people={people} />
      </PageLayout>
    );
  }
}

interface HomeState {
  people: PersonInterface[];
}
