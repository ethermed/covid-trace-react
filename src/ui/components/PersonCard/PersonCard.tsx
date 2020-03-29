import React, { FunctionComponent } from "react";
import styles from "./PersonCard.module.scss";
import { Roles } from "../../enums/Roles.enum";
import { Statuses } from "../../enums/Statuses.enum";
import { PersonInterface } from "../../types/Person.interface";

// export enum IPersonStatus {
//   HEALTHY = 'Healthy',
//   INFECTED = 'Infected',
//   TESTED = 'Tested',
//   AT_RISK = 'At Risk'
// }

// export interface IPersonCard {
//   profileImgSrc?: string;
//   position: string;
//   fullName: string;
//   status?: IPersonStatus;
// }

export const PersonCard: FunctionComponent<PersonInterface> = ({
  role = Roles.DOCTOR,
  name = "Jane Doe",
  status = Statuses.BEING_TESTED,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card__content}>
        <h3 className="txt__body--2">{role}</h3>
        <h1 className="txt__h5">{name}</h1>
        <div className={styles.status__container}>
          <div
            style={{ width: 24, height: 24, backgroundColor: `var(--yellow)` }}
          ></div>
          <div className="status__text">{status}</div>
        </div>
      </div>
    </div>
  );
};
