import * as React from "react";
import { People } from "./People";
import { peopleManager } from "./service/PeopleManager";
import { Roles, Statuses } from "./types";

export class PeopleContainer extends React.Component<{}, PeopleContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount = async () => {
    const people = await peopleManager.get();

    this.setState({ people });
  };

  render() {
    const { people } = this.state;

    return <People people={people} />;
  }
}

interface PeopleContainerState {
  people: Person[];
}

export interface Person {
  name: string;
  id: number;
  role: Roles;
  status: Statuses;
}
