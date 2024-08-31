export as namespace BezierEasing;

export = bezier;
declare function bezier(x1: number, y1: number, x2: number, y2: number): bezier.EasingFunction;

declare namespace bezier {
    export type EasingFunction = (input: number) => number
}
