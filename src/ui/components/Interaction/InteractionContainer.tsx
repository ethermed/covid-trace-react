import * as React from "react";
import { Interaction } from "./Interaction";
import { person } from "../../../mockData/person";

const atRiskDetails = [
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
  {
    starttime: `${Date.now()}`,
    endtime: `${Date.now() - 1000}`,
    zone: "cafe",
  },
];

export class InteractionContainer extends React.Component {
  render() {
    return <Interaction person={person} details={atRiskDetails} />;
  }
}
