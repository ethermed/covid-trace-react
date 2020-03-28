import * as React from "react";

import { Link } from "react-router-dom";
import { PersonInterface } from "../Person/Person";

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
  people: PersonInterface[];
}
