import * as React from "react";
import { PersonInterface } from "../../types/Person.interface";
import { PersonCardVariants } from "../../enums/PersonCardVariants.enum";

export const PersonInfoContainer = ({ person, variant }: PersonInfoContainerProps) => {
  const { status, role, firstname, lastname } = person;
  return (
    <div className="person-info__container">
      <div className="txt__body--2 txt-left">
        <span>{status}</span>
        <span>{variant === PersonCardVariants.SLIM ? ` - ${role}` : ""}</span>
      </div>
      <div className="txt__h5 txt-left">{`${firstname} ${lastname}`}</div>
    </div>
  );
};

interface PersonInfoContainerProps {
  person: PersonInterface;
  variant: PersonCardVariants;
}
