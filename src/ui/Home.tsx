import * as React from "react";
import { PersonInterface } from "./Person/Person";
import { peopleManager } from "./People/service/PeopleManager";
import { PeopleContainer } from "./People/PeopleContainer";
import { StatusBar } from "./StatusBar";
import { Roles, Statuses } from "./People/types";

export class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount = async () => {
    // const people = await peopleManager.get([]);

    const people: PersonInterface[] = [
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.AT_RISK
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.BEING_TESTED
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.OK
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.INFECTED
      },
      {
        id: 1,
        name: "billy",
        role: Roles.DOCTOR,
        status: Statuses.INFECTED
      }
    ];

    this.setState({ people });
  };

  updatePeople = (people: PersonInterface[]) => {
    this.setState({ people });
  };

  render() {
    const { people } = this.state;

    return (
      <div style={{ padding: "100px" }}>
        <h2 style={{ textAlign: "left", marginBottom: "30px" }}>Tracking</h2>

        <StatusBar people={people} />
        <PeopleContainer updatePeople={this.updatePeople} people={people} />
      </div>
    );
  }
}

interface HomeState {
  people: PersonInterface[];
}
