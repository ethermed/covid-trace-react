import * as React from "react";
import { BarChartVizManager } from "../../utils/bar-chart-viz-manager";
import { IVizElement } from "../../types/vizelement.interface";
import { IStatusDatum } from "../../types/status.interface";
import { SampleAtRiskData } from "../../../mockData/statusdata";
import * as _ from "lodash";

export class StatusBar extends React.Component<StatusBarProps> {
  vizElements: IVizElement<IStatusDatum>[];
  vizManager: BarChartVizManager;

  componentDidMount() {
    this.vizManager = new BarChartVizManager("barChartContainer");
    this.buildViz();
  }

  componentDidUpdate(prevProps: StatusBarProps) {
    if (!_.isEqual(prevProps.data, this.props.data)) {
      if (!this.vizManager) {
        this.vizManager = new BarChartVizManager("barChartContainer");
      }
      this.buildViz();
    }
  }

  buildViz() {
    this.getDataSet();
    this.vizManager.buildScales(this.vizElements);
    this.vizManager.drawBackground();
    this.vizManager.drawDataValues();
  }

  getDataSet() {
    this.stackData(this.props.data);
    this.vizElements = SampleAtRiskData.map((z) => {
      const el: IVizElement<IStatusDatum> = new IVizElement(z);
      return el;
    });
  }

  stackData(data: IStatusDatum[]) {
    // sort
    // data.sort((a, b) => {
    //   return a.count < b.count
    //     ? -1
    //     : a.count > b.count
    //       ? 1
    //       : 0;
    // });

    for (let i = 0; i < data.length; i++) {
      const curr = data[i];
      const prev = data[i - 1];
      if (!prev) {
        curr.x1 = 0;
        curr.x2 = curr.count;
      } else {
        curr.x1 = prev.x2;
        curr.x2 = curr.x1 + curr.count;
      }
    }
  }

  render() {
    return (
      <div className="patient-status-container" id="barChartContainer"></div>
    );
  }
}

interface StatusBarProps {
  data: IStatusDatum[];
}
