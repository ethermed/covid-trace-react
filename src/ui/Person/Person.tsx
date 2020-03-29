import * as React from "react";
import { People } from "../People/People";
import { PersonInterface } from "../types/Person.interface";

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
