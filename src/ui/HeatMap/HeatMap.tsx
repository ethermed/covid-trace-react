import * as React from "react";
import * as _ from 'lodash'
import { IHeatMapProps, IHospitalZone } from "../types/hospital.interface";
import { IVizElement } from "../types/vizelement.interface";
import { HeatMapVizManager } from "../utils/heat-map-viz-manager";

export class HeatMap extends React.Component<IHeatMapProps> {

  private vizElements: IVizElement<IHospitalZone>[];
  vizManager: HeatMapVizManager;

  componentDidMount() {
    console.log('props @didmount', this.props);
    this.vizManager = new HeatMapVizManager('heatMapVizContainer');
    this.vizManager.addFloorPlan('/floorplan.png');
    this.buildViz();
  }

  componentDidUpdate(prev: IHeatMapProps) {
    if(_.isEqual(prev, this.props)) {
      if (!this.vizManager) {
        this.vizManager = new HeatMapVizManager('heatMapVizContainer');
        this.vizManager.addFloorPlan('/floorplan.png');
      }
      this.buildViz();
    }
  }

  private buildViz() {
    this.getDataSet();
    this.vizManager.drawDataPoints(this.vizElements);
    this.vizManager.addHeatMap(this.vizElements);
  }

  private getDataSet() {
    const data = this.props.hospitalZones;
    this.vizElements = data.map(z => {
      const el: IVizElement<IHospitalZone> = new IVizElement(z);
      return el;
    });
  }

  render() {
    return (
      <div 
      className="floor-plan-container" 
      id="heatMapVizContainer"
      style={
        {
        width: '800px',
        height: '600px', // 1365 x 904
        marginLeft: '20%',
        position: 'relative'
      }
    }></div>
    );
  }

};

