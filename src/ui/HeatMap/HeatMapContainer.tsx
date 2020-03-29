import * as React from "react";
import { HeatMap } from './HeatMap';

const hospitalZones = [
  {
    name: "icu",
    count: 100,
    xPos: 5,
    yPos: 10
  },
  {
    name: "nurses station",
    count: 50,
    xPos: 50,
    yPos: 5
  },
  {
    name: "cafe",
    count: 0,
    xPos: 0,
    yPos: 0
  },
  {
    name: "surgery",
    count: 4,
    xPos: 13,
    yPos: 13
  },
  {
    name: "peds",
    count: 25,
    xPos: 36,
    yPos: 80
  },
  {
    name: "ortho",
    count: 100,
    xPos: 80,
    yPos: 50
  }
];

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
    this.setState({ hospitalZones });
  }

  render(){
      return <HeatMap hospitalZones={hospitalZones}/>
  }
}

interface HeatMapContainerState {
  hospitalZones: HospitalZone[];
}

export interface HospitalZone {
  name: string;
  count: number;
  xPos: number;
  yPos: number;
}
