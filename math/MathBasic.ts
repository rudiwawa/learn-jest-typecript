interface MathBasicInterface {
  add(...args: number[]): number;
  subtract(...args: number[]): number;
  multiply(...args: number[]): number;
  divide(...args: number[]): number;
  _validateArgs(args: number[]): [number, number];
}

const MathBasic: MathBasicInterface = {
  _validateArgs(args: number[]): [number, number] {
    if (args.length !== 2) {
      throw new Error("fungsi hanya menerima dua parameter");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }
    return [a, b];
  },
  add(...args: number[]): number {
    const [a, b] = this._validateArgs(args);
    return a + b;
  },
  subtract(...args: number[]): number {
    const [a, b] = this._validateArgs(args);
    return a - b;
  },
  multiply(...args: number[]): number {
    const [a, b] = this._validateArgs(args);
    return a * b;
  },
  divide(...args: number[]): number {
    const [a, b] = this._validateArgs(args);
    if (b === 0) {
      throw new Error("tidak dapat membagi dengan nol");
    }
    return a / b;
  },
};

export default MathBasic;
