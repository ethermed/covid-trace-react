import * as React from "react";
import { IStatusDatum } from "../../types/status.interface";
import { SampleAtRiskData } from "../../../mockData/statusdata";
import { StatusBar } from "./StatusBar";
import { Statuses } from "./Statuses";

export class StatusBarContainer extends React.Component<
  {},
  StatusBarContainerState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: SampleAtRiskData });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Statuses data={data} />
        <StatusBar data={data} />
      </>
    );
  }
}

interface StatusBarContainerState {
  data: IStatusDatum[];
}
