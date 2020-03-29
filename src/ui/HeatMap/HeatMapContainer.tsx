import * as React from "react";
import { HeatMap } from './HeatMap';
import { IHospitalZone } from "../types/hospital.interface";
import { SampleHospitalZones } from "../../mockData/heatmap-data";


export class HeatMapContainer extends React.Component<
  {},
  HeatMapContainerState
> {
  constructor(props: HeatMapContainerState) {
    super(props);

    this.state = {
      hospitalZones: []
    };
  }

  async componentDidMount() {
    this.setState({ hospitalZones: SampleHospitalZones });
  }

  render(){
      const { hospitalZones } = this.state;
      if (!hospitalZones.length) {
        return <div></div>;
      }
      return <HeatMap hospitalZones={hospitalZones}/>
  }
}

interface HeatMapContainerState {
  hospitalZones: IHospitalZone[];
}


