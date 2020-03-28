import * as React from "react";
import { Person } from "./PeopleContainer";

export const People = ({ people }: PeopleProps) => {
  return (
    <>
      {people.map(person => (
        <div key={person.id}>{person.name}</div>
      ))}
    </>
  );
};

interface PeopleProps {
  people: Person[];
}
