import * as React from "react";
import { People } from "../People/People";
import { PersonInterface } from "../types/Person.interface";
import { InteractionContainer } from "../components/Interaction/InteractionContainer";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardVariants } from "../enums/PersonCardVariants.enum";
import styles from "./Person.module.scss";
import { PageHeaderWithBackBtn } from "../components/PageHeader/PageHeaderWithBackBtn/PageHeaderWithBackBtn";

export const Person = ({ person, peopleAtRisk }: PersonProps) => {
  return (
    <>
      <InteractionContainer />
      <div className={styles.header__wrapper}>
        <PageHeaderWithBackBtn headline={person.firstname} />
        <PersonCard person={person} variant={PersonCardVariants.PROFILE} />
      </div>
      <People people={peopleAtRisk} />
    </>
  );
};

interface PersonProps {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
