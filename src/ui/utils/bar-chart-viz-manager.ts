import { BaseVizManager } from './base-viz-manager';
import * as d3 from 'd3';
import { StatusColorKeyMap } from '../enums/Statuses.enum';
import { IVizElement } from '../types/vizelement.interface';
import { IStatusDatum } from '../types/status.interface';

export class BarChartVizManager extends BaseVizManager {

    private xScale: d3.ScaleLinear<number, number>
    private yScale: d3.ScaleLinear<number, number>;
    private height = 20;
    private fullWidth: number;
    private data: IVizElement<IStatusDatum>[];

    colorKeyMap = {
        'healthy': '#239F57',
        'infected': '#EE0601',
        'at-risk': '#FFA101',
        'tested': '#3D91D8',
    }

    constructor(containerId: string) {
        super();
        this.containerUid = containerId;
        this.getSvgContainer();
        this.fullWidth = this.viewBox.width;
    }

    buildScales(data: IVizElement<IStatusDatum>[]) {
        let min = 0,
            max = 0;
        this.data = data;
        data.forEach(d => {
            min = d.data.x1 < min
                ? d.data.x1
                : min;

            max = d.data.x2 > max
            ? d.data.x2
            : max;
        });

        this.xScale = d3.scaleLinear()
            .domain([0, max])
            .range([0, this.viewBox.width]);


        this.yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([this.viewBox.height, 0]);
    }

    drawBackground() {
        const bgGroup = this.containerRef
            .append('g')
            .attr('id', 'background-group');

        bgGroup
            .append('rect')
            .attr('y', 0)
            .attr('x', 0)
            .attr('rx', '2')
            .attr('stroke', '#223248')
            .attr('stroke-width', '.3')
            .attr('opacity', '.95')
            .attr('height', 20 + 'px')
            .attr('width', this.viewBox.width + 'px')
            .style('fill', '#121e2f');
    }

    drawDataValues() {
        const parentGroup = this.containerRef
            .append('g')
            .attr('id', 'values-data-group');

        const update = parentGroup
            .selectAll('status-values')
            .data(this.data);

        const rectGroups = update
            .enter()
            .append('g')
            .attr('id', function (el) {
                el.group = d3.select(this);
                return el.data.status + '-group';
            });
        const ctx = this;
        rectGroups.each(function (el) {
            ctx.drawValueRect(el);
        });
    }

    drawValueRect(el: IVizElement<IStatusDatum>) {

        el.group
            .append('rect')
            .attr('y', 0)
            .attr('x', this.xScale(el.data.x1))
            .attr('rx', '2')
            .attr('stroke', '#223248')
            .attr('stroke-width', '.6')
            .attr('opacity', '.95')
            .attr('height', 20 + 'px')
            .attr('width', this.xScale(el.data.x2) + 'px')
            .style('fill', this.getStatusColor(el.data.status));
    }

    getStatusColor(status: string) {
        return StatusColorKeyMap[status.toLowerCase()];
    }

    // addLegend() {
    //     const parentGroup = this.containerRef
    //         .append('g')
    //         .attr('id', 'values-legend-group');

    //     const update = parentGroup
    //         .selectAll('legend-values')
    //         .data(this.data);

    //     const textGroups = update
    //         .enter()
    //         .append('g')
    //         .attr('id', function (el) {
    //             el.group = d3.select(this);
    //             return el.data.status + '-group';
    //         });
    //     const ctx = this;
    //     textGroups.each(function (el) {
    //         ctx.addLegendText(el);
    //     });
    // }

    // addLegendText(el: IVizElement<IStatusDatum>) {
    //     cont el.group
    //         .append('text')
    //         .text(el.data.count);
    //         .attr('y', 0)
    //         .attr('x', this.xScale(el.data.x1))
    //         .attr('rx', '2')
    //         .attr('stroke', '#223248')
    //         .attr('stroke-width', '.6')
    //         .attr('opacity', '.95')
    //         .attr('height', 20 + 'px')
    //         .attr('width', this.xScale(el.data.x2) + 'px')
    //         .style('fill', this.getStatusColor(el.data.status));
    // }

}