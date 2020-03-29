import * as React from "react";
import { PersonInterface } from "./types/Person.interface";
// import { peopleManager } from "./People/service/PeopleManager";
import { PeopleContainer } from "./People/PeopleContainer";
import { StatusBar } from "./StatusBar";
import { Roles } from "./enums/Roles.enum";
import { Statuses } from "./enums/Statuses.enum";
import { PageLayout } from "./components/Layout/PageLayout";

export class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount = async () => {
    // const people = await peopleManager.get([]);

    const people: PersonInterface[] = [
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.AT_RISK,
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.BEING_TESTED,
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.OK,
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.INFECTED,
      },
      {
        id: 1,
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
