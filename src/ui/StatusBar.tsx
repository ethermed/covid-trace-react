import * as React from "react";
import { PersonInterface } from "./types/Person.interface";
import { Statuses } from "./enums/Statuses.enum";

export const StatusBar = ({ people }: StatusBarProps) => {
  const statuses = Object.values(Statuses).map((status) => {
    return {
      label: status,
      number: people.filter((person) => person.status === status).length,
    };
  });

  const percents = statuses
    .map((status) => {
      return `${(status.number / people.length) * 100}%`;
    })
    .join(" ");

  return (
    <div
      style={{
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: percents,
        padding: "100px",
      }}
    >
      <div>
        <p>{statuses[0].number}</p>
        <p>{statuses[0].label}</p>
        <div style={{ height: "20px", backgroundColor: "green" }} />
      </div>
      <div>
        <p>{statuses[1].number}</p>
        <p>{statuses[1].label}</p>
        <div style={{ height: "20px", backgroundColor: "red" }} />
      </div>
      <div>
        <p>{statuses[2].number}</p>
        <p>{statuses[2].label}</p>
        <div style={{ height: "20px", backgroundColor: "orange" }} />
      </div>
      <div>
        <p>{statuses[3].number}</p>
        <p>{statuses[3].label}</p>
        <div style={{ height: "20px", backgroundColor: "blue" }} />
      </div>
    </div>
  );
};

interface StatusBarProps {
  people: PersonInterface[];
}
