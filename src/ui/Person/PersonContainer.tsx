import * as React from "react";
import {
  Person as PersonInterface,
  Roles,
  Statuses
} from "../People/PeopleContainer";
import { Person } from "./Person";

const person = {
  name: "Bob Smith",
  id: 12345,
  role: Roles.DOCTOR,
  status: Statuses.OK
};

export class PersonContainer extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super(props);

    this.state = {
      person: {} as PersonInterface
    };
  }

  componentDidMount = () => {
    this.setState({ person });
  };

  render() {
    const { person } = this.state;

    return <Person person={person} />;
  }
}

interface PersonProps {
  id: number;
}

interface PersonState {
  person: PersonInterface;
}
