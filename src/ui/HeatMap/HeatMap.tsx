import * as React from "react";
import { HospitalZone } from "./HeatMapContainer";

export const HeatMap = ({ hospitalZones }: HeatMapProps) => {
  return <h1>heat map goes here</h1>;
};

interface HeatMapProps {
  hospitalZones: HospitalZone[];
}
