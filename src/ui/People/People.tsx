import * as React from "react";

import { Link } from "react-router-dom";
import { PersonInterface } from "../types/Person.interface";

import styles from "./People.module.scss";
import { PersonCard } from "../components/PersonCard/PersonCard";

// Person Card Here
export const People = ({ people }: PeopleProps) => {
  return (
    <ul className={styles.people__container}>
      {people.map((person) => (
        <li key={person.id}>
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  );
};

interface PeopleProps {
  people: PersonInterface[];
}
