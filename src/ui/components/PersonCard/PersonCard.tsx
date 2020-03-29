import React, { FunctionComponent } from "react";
import styles from "./PersonCard.module.scss";
import { Roles } from "../../enums/Roles.enum";
import { Statuses } from "../../enums/Statuses.enum";
import { PersonInterface } from "../../types/Person.interface";
import { ReactComponent as StatusCircle } from "../../../assets/icons/status-circle.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/send-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-icon.svg";

export const PersonCard: FunctionComponent<PersonInterface> = ({
  role = Roles.DOCTOR,
  name = "Jane Doe",
  status = Statuses.BEING_TESTED,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.status__symbol}
        data-state={status ? status : "UNKNOWN"}
      >
        <StatusCircle />
      </div>
      <div className="person-info__container">
        <div className="txt__body--2 txt-left">
          <span>{status}</span>&bull;<span>{role}</span>
        </div>
        <div className="txt__h5 txt-left">{name}</div>
      </div>
      <div className={styles["person-actions__container"]}>
        <button className={styles["action-send"]}>
          <SendIcon />
        </button>
        <button className="action-edit">
          <EditIcon />
        </button>
      </div>
    </div>
  );
};
