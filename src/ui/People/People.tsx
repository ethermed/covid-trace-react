import * as React from "react";
import { PersonInterface } from "../types/Person.interface";

import styles from "./People.module.scss";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardVariants } from "../enums/PersonCardVariants.enum";

export const People = ({
  people,
  onOpenPopout,
  areAtRiskPeople,
}: PeopleProps) => {
  return (
    <ul className={styles.people__container}>
      {people.map((person) => (
        <li key={person.id}>
          <PersonCard
            person={person}
            isAtRiskPerson={areAtRiskPeople}
            onOpenPopout={onOpenPopout}
            variant={PersonCardVariants.SLIM}
          />
        </li>
      ))}
    </ul>
  );
};

interface PeopleProps {
  people: PersonInterface[];
  areAtRiskPeople: boolean;
  onOpenPopout?(): void;
}
