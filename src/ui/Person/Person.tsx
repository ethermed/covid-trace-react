import * as React from "react";
import { People } from "../People/People";
import { PersonInterface } from "../types/Person.interface";

export const Person = ({ person, peopleAtRisk }: PersonProps) => {
  return (
    <>
      <div>People at risk</div>
      <People people={peopleAtRisk} />
    </>
  );
};

interface PersonProps {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
