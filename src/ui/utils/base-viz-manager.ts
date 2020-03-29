import { IViewBoxParams } from '../types/viewbox.interface';
import * as d3 from 'd3';

export abstract class BaseVizManager {
    htmlContainer: d3.Selection<d3.BaseType, any, HTMLElement, any>;
    containerUid: string;
    containerRef: d3.Selection<SVGSVGElement, any, HTMLElement, any>;
    viewBox: IViewBoxParams;
    containerOriginX: number;
    containerOriginY: number;

    protected getSvgContainer() {
        this.htmlContainer = d3.select('#' + this.containerUid);

        // remove any previous instances of the visualization
        this.htmlContainer.select('svg').remove();

        this.containerRef = this.htmlContainer.append('svg');

        this.containerRef.append('svg:g').attr('id', this.containerUid + '-root-g');

        this.setupSvgContainerViewBox();
    }

    protected setupSvgContainerViewBox() {
        this.viewBox = this.getViewBoxParams(
            this.htmlContainer.node() as HTMLDivElement);

        this.containerRef
            .attr('width', () => this.viewBox.width)
            .attr('height', () => this.viewBox.height)
            .attr('preserveAspectRatio', 'xMinYMin meet');
    }

    getViewBoxParams(container: HTMLElement): IViewBoxParams {
        const clientRect = container.getBoundingClientRect();
        return {
            width: clientRect.width,
            height: clientRect.height,
            originX: clientRect.left,
            originY: clientRect.top
        }
    }
}