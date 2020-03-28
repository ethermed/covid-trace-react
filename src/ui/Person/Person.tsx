import * as React from "react";
import { Person as PersonInterface } from "../People/PeopleContainer";
import { People } from "../People/People";

export const Person = ({ person, peopleAtRisk }: PersonProps) => {
  return (
    <>
      <ul>
        <li>{person.id}</li>
        <li>{person.name}</li>
        <li>{person.role}</li>
        <li>{person.status}</li>
      </ul>

      <div>People at risk</div>
      <People people={peopleAtRisk} />
    </>
  );
};

interface PersonProps {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
