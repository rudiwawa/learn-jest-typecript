// MathBasic.ts

export interface MathBasicInterface {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

class MathBasic implements MathBasicInterface {
  private validateArgs(a: number, b: number): void {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Function only accepts number parameters");
    }
  }

  add(a: number, b: number): number {
    this.validateArgs(a, b);
    return a + b;
  }

  subtract(a: number, b: number): number {
    this.validateArgs(a, b);
    return a - b;
  }

  multiply(a: number, b: number): number {
    this.validateArgs(a, b);
    return a * b;
  }

  divide(a: number, b: number): number {
    this.validateArgs(a, b);
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

export default new MathBasic();
