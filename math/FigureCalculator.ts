import { MathBasicInterface } from './MathBasic';
import { FigureCalculatorInterface } from './FigureCalculator.interface';

class FigureCalculator implements FigureCalculatorInterface {
  constructor(private readonly mathBasic: MathBasicInterface) {}

  calculateRectanglePerimeter(length: number, width: number): number {
    this.validateArgs([length, width], 2);
    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(length: number, width: number): number {
    this.validateArgs([length, width], 2);
    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(sideA: number, sideB: number, base: number): number {
    this.validateArgs([sideA, sideB, base], 3);
    return this.mathBasic.add(sideA, this.mathBasic.add(sideB, base));
  }

  calculateTriangleArea(base: number, height: number): number {
    this.validateArgs([base, height], 2);
    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }

  private validateArgs(args: number[], expectedCount: number): void {
    if (args.length !== expectedCount) {
      throw new Error(`Expected ${expectedCount} arguments, but got ${args.length}`);
    }
    if (args.some(arg => typeof arg !== 'number')) {
      throw new Error('All arguments must be numbers');
    }
  }
}

export default FigureCalculator;