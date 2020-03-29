import * as React from "react";
import { HeatMap } from "./HeatMap";
import { IHospitalZone } from "../types/hospital.interface";
import { SampleHospitalZones } from "../../mockData/heatmap-data";
import { PageLayout } from "../components/Layout/PageLayout";

export class HeatMapContainer extends React.Component<
  {},
  HeatMapContainerState
> {
  constructor(props: HeatMapContainerState) {
    super(props);

    this.state = {
      hospitalZones: [],
    };
  }

  async componentDidMount() {
    this.setState({ hospitalZones: SampleHospitalZones });
  }

  render() {
    const { hospitalZones } = this.state;
    if (!hospitalZones.length) {
      return <div></div>;
    }
    return (
      <PageLayout>
        <HeatMap hospitalZones={hospitalZones} />
      </PageLayout>
    );
  }
}

interface HeatMapContainerState {
  hospitalZones: IHospitalZone[];
}
