
export interface IHeatMapProps {
    hospitalZones: IHospitalZone[];
}

export interface IHospitalZone {
    name: string;
    count: number;
    xPos: number;
    yPos: number;
  }

