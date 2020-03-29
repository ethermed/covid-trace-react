import * as React from "react";
import { IStatusDatum } from "../../types/status.interface";

export const Statuses = ({ data }: StatusesProps) => {
  const tested = data.find((item) => item.status === "tested");

  if (tested) {
    tested.status = "Being-Tested";
  }
  return (
    <>
      {data.map((status) => {
        return (
          <div
            key={status.status}
            style={{ display: "inline-block", marginRight: "20px" }}
          >
            <h4>{status.count}</h4>
            <p>{status.status}</p>
          </div>
        );
      })}
    </>
  );
};

interface StatusesProps {
  data: IStatusDatum[];
}
