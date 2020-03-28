import * as React from 'react';
import { Person, PersonInterface } from './Person';
import { person } from '../../mockData/person';
import { people } from '../../mockData/people';

export class PersonContainer extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super(props);

    this.state = {
      person: {} as PersonInterface,
      peopleAtRisk: []
    };
  }

  componentDidMount = () => {
    this.setState({ person, peopleAtRisk: people });
  };

  render() {
    const { person, peopleAtRisk } = this.state;

    return <Person person={person} peopleAtRisk={peopleAtRisk} />;
  }
}

interface PersonProps {
  id: number;
}

interface PersonState {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
