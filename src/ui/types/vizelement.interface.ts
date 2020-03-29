export class IVizElement<T> {
    selection: d3.Selection<any, IVizElement<T>, any, any>;
    group: d3.Selection<SVGGElement, IVizElement<T>, any, any>;
    width: number;
    height: number;
    radius: number;
    x: number;
    y: number;
    constructor(public data: T) {}
}