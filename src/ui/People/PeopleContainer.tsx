import * as React from "react";
import { People } from "./People";

export enum Statuses {
  OK = "ok",
  AT_RISK = "at-risk",
  BEING_TESTED = "being-tested",
  INFECTED = "infected"
}

export enum Roles {
  DOCTOR = "doctor",
  PATIENT = "patient",
  NURSE = "nurse",
  STAFF = "staff"
}

const people: Person[] = [
  {
    name: "Bob Smith",
    id: 12345,
    role: Roles.DOCTOR,
    status: Statuses.OK
  },
  {
    name: "Jane doe",
    id: 12346,
    role: Roles.PATIENT,
    status: Statuses.INFECTED
  },
  {
    name: "Bob Vance",
    id: 12347,
    role: Roles.STAFF,
    status: Statuses.AT_RISK
  },
  {
    name: "Jimmy John",
    id: 12348,
    role: Roles.NURSE,
    status: Statuses.BEING_TESTED
  }
];

export class PeopleContainer extends React.Component<{}, PeopleContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount = () => {
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
