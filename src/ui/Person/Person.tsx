import * as React from "react";
import { Person as PersonInterface } from "../People/PeopleContainer";

export const Person = ({ person }: PersonProps) => {
  console.log(person);
  return (
    <ul>
      <li>{person.id}</li>
      <li>{person.name}</li>
      <li>{person.role}</li>
      <li>{person.status}</li>
    </ul>
  );
};

interface PersonProps {
  person: PersonInterface;
}
