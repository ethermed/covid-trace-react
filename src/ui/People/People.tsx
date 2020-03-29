import * as React from "react";
import { PersonInterface } from "../types/Person.interface";

import styles from "./People.module.scss";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardVariants } from "../enums/PersonCardVariants.enum";

export const People = ({ people }: PeopleProps) => {
  return (
    <ul className={styles.people__container}>
      {people.map((person) => (
        <li key={person.id}>
          <PersonCard person={person} variant={PersonCardVariants.SLIM} />
        </li>
      ))}
    </ul>
  );
};

interface PeopleProps {
  people: PersonInterface[];
}
