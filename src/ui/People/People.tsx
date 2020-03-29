import * as React from "react";

import { Link } from "react-router-dom";
import { PersonInterface } from "../types/Person.interface";

// Person Card Here
export const People = ({ people }: PeopleProps) => {
  return (
    <ul>
      {people.map((person) => (
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
