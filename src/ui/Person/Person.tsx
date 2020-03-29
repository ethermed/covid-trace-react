import * as React from "react";
import { People } from "../People/People";
import { PersonInterface } from "../types/Person.interface";
import { InteractionContainer } from "../components/Interaction/InteractionContainer";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardVariants } from "../enums/PersonCardVariants.enum";

export const Person = ({ person, peopleAtRisk }: PersonProps) => {
  return (
    <>
      <InteractionContainer />
      <PageHeader headline={person.firstname} />
      <PersonCard person={person} variant={PersonCardVariants.PROFILE} />
      <ul>
        <li>{person.id}</li>
        <li>{person.firstname}</li>
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
