import * as React from "react";
import { PersonInterface } from "../../types/Person.interface";
import { PersonCard } from "../PersonCard/PersonCard";
import styles from "./Interaction.module.scss";
import { AtRiskDetails } from "../../types/AtRiskDetails";
import { getTotalTime } from "./helpers/getTotalTime";
import { Link } from "react-router-dom";
import { PersonCardVariants } from "../../enums/PersonCardVariants.enum";

export const Interaction = ({ person, details }: InteractionProps) => {
  return (
    <div className={styles.container}>
      <PersonCard
        isAtRiskPerson={false}
        variant={PersonCardVariants.SLIM}
        person={person}
      />

      <div style={{ width: "100%", marginTop: "30px" }}>
        <div className={styles["data-container"]}>
          <h4>{details.length}</h4>
          <p>INTERACTIONS</p>
        </div>
        <div className={styles["data-container"]}>
          <h4>{getTotalTime(details)}</h4>
          <p>Duration (min)</p>
        </div>
      </div>

      <ul className={styles["interactions-list"]}>
        {details.map((detail) => {
          var date = new Date(Date.now() * 1000);

          return (
            <li
              key={detail.starttime}
            >{`${date.getHours()}:${date.getMinutes()}`}</li>
          );
        })}
      </ul>

      <button>
        <Link to={`/person/${person.id}`}>View Profile</Link>
      </button>
    </div>
  );
};

interface InteractionProps {
  person: PersonInterface;
  details: AtRiskDetails[];
}
