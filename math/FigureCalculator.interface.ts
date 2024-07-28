export interface FigureCalculatorInterface {
  calculateRectanglePerimeter(length: number, width: number): number;
  calculateRectangleArea(length: number, width: number): number;
  calculateTrianglePerimeter(sideA: number, sideB: number, base: number): number;
  calculateTriangleArea(base: number, height: number): number;
}