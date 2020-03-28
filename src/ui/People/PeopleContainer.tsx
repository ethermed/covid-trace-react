import * as React from "react";
import { People } from './People';

export class PeopleContainer extends React.Component<{}, PeopleContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: []
    };
  }

  render(){
      const {people} = this.state;

      return <People people={people} />
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

enum Statuses {
  OK = "ok",
  AT_RISK = "at-risk",
  BEING_TESTED = "being-tested",
  INFECTED = "infected"
}

enum Roles {
  DOCTOR = "doctor",
  PATIENT = "patient",
  NURSE = "nurse",
  STAFF = "staff"
}
