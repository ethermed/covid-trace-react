import { BaseVizManager } from './base-viz-manager';
import * as d3 from 'd3';
import { GetTranslateStr } from './translate';
import * as simpleheat from 'simpleheat';
import { IVizElement } from '../types/vizelement.interface';
import { IHospitalZone } from '../types/hospital.interface';

export class HeatMapVizManager extends BaseVizManager {

    private xScale: d3.ScaleLinear<number, number>
    private yScale: d3.ScaleLinear<number, number>;
    private heatMapRef: d3.Selection<HTMLCanvasElement, any, HTMLElement, any>;
    private heatMap;

    constructor(containerId: string) {
        super();
        this.containerUid = containerId;
        this.getSvgContainer();
        this.setupHeatMapCanvas();
        this.buildScales();
    }

    private setupHeatMapCanvas() {
        this.heatMapRef = this.htmlContainer
        .append('canvas')
        .attr('id', 'heatmap')
        .attr('width', this.viewBox.width)
        .attr('height', this.viewBox.height)
        .style('position', 'relative')
        .style('top', (-this.viewBox.height) + 'px');
    }

    private buildScales() {
        this.xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([100, this.viewBox.width]);

        this.yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([this.viewBox.height - 110, 110]);
    }

    addFloorPlan(url: string) {
        const imgGrp = this.containerRef
            .append('g')
            .attr('id', 'img-layer');

        imgGrp
            .append('image')
            .attr("xlink:href", url)
            .attr('width', this.viewBox.width)
            .attr('height', this.viewBox.height);
    }

    drawDataPoints(data: IVizElement<IHospitalZone>[]) {
        const dataPtsGrp = this.containerRef
            .append('g')
            .attr('id', 'data-points');

        const groups = dataPtsGrp
            .selectAll('data-points')
            .data(data)
            .enter()
            .append('g')
            .attr('id', function (d) {
                d.group = d3.select(this);
                return d.data.name + '-group';
            });

        const ctx = this;

        groups.each(function (d) {
            ctx.appendDataPoint(d);
        });
    }

    appendDataPoint(el: IVizElement<IHospitalZone>) {
        el.x = this.xScale(el.data.xPos);
        el.y = this.yScale(el.data.yPos);

        const selection = el.group.append('circle')
            .attr('r', 1)
            .attr('cx', el.x)
            .attr('cy', el.y)
            //.attr('fill', 'yellow');

        selection
            .on('mouseover', function () {
                el.group
                    .append('text')
                    .text(el.data.name + ': ' + el.data.count)
                    .style('font-family', 'Roboto')
                    .style('font-weight', 'bold')
                    .style('font-size', '12px')
                    .style('transform', GetTranslateStr(`${el.x + 5}`, `${el.y - 6}`));

            })
            .on('mouseout', function () {
                el.group
                    .select('text')
                    .remove();
            })


        el.selection = selection;
    }

    /**
     * All of this is effectively useless lol. Definitely should be replaced
     * the heatmap package doesn't exacly do much except add a gradient.
     * But time is money. $$$$$
     * @param data 
     */
    addHeatMap(data: IVizElement<IHospitalZone>[]) {
        const canvas = this.heatMapRef.node() as HTMLCanvasElement;
        // const context = canvas.getContext('2d');
        this.heatMap = new simpleheat(canvas);

        const heatMapData = data.map(el => {
            return [el.x, el.y, el.data.count];
        });
        this.heatMap.data(heatMapData);

        
        const dataMax = d3.max(data, el => el.data.count);

        this.heatMap.radius(27, 23);
        this.heatMap.max(dataMax);

        const gradient = {
            0.4: 'green',
            //0.5: '#66bb7a',
            // 0.3: 'blue',
            //0.4:  '#ADD8E8', //'#01B7C7',
            //0.6: '#AFD8E9',
            //0.6: '#F8F9C6',//'lime',
            // 0.8: 'yellow',
            // 0.7: '#F4F8AB',
            0.5: '#ebf264',
            0.6: '#FED280',
            0.8: '#FF362C',
            1.0: 'red'
        }
        
        this.heatMap.gradient(gradient);
        this.heatMap.draw();
    }


}