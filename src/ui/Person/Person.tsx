import * as React from "react";
import { People } from "../People/People";
import { PersonInterface } from "../types/Person.interface";
import { InteractionContainer } from "../components/Interaction/InteractionContainer";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { PersonCardVariants } from "../enums/PersonCardVariants.enum";
import styles from "./Person.module.scss";
import { PageHeaderWithBackBtn } from "../components/PageHeader/PageHeaderWithBackBtn/PageHeaderWithBackBtn";

export const Person = ({ person, peopleAtRisk }: PersonProps) => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const update = (isOpen: boolean) => () => {
    updateIsOpen(isOpen)
  }
  return (
    <>
      {isOpen && <InteractionContainer />}
      <div className={styles.header__wrapper}>
        <PageHeaderWithBackBtn headline={person.firstname} />
        <PersonCard person={person} isAtRiskPerson={false} variant={PersonCardVariants.PROFILE} />
      </div>
      <People people={peopleAtRisk} onOpenPopout={update(!isOpen)} areAtRiskPeople={true }/>
    </>
  );
};

interface PersonProps {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
