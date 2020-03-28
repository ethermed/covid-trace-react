import * as React from 'react';
import { Person } from './PeopleContainer';
import { Link } from 'react-router-dom';

export const People = ({ people }: PeopleProps) => {
  return (
    <ul>
      {people.map(person => (
        <li key={person.id}>
          <Link to={`/person/${person.id}`}>{person.name}</Link>
        </li>
      ))}
    </ul>
  );
};

interface PeopleProps {
  people: Person[];
}
