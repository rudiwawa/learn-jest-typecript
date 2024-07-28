// MathBasic.test.ts

import MathBasic from "./MathBasic";
import { expect, it, describe } from "@jest/globals";

describe("MathBasic", () => {
  it("should contain add, subtract, multiply, and divide functions", () => {
    expect(MathBasic).toHaveProperty("add");
    expect(MathBasic).toHaveProperty("subtract");
    expect(MathBasic).toHaveProperty("multiply");
    expect(MathBasic).toHaveProperty("divide");
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe("add function", () => {
    it("should throw error when given non-number parameters", () => {
      expect(() => MathBasic.add("1" as any, "2" as any)).toThrowError();
      expect(() => MathBasic.add(true as any, {} as any)).toThrowError();
      expect(() => MathBasic.add(null as any, false as any)).toThrowError();
    });

    it("should return a + b when given two number parameters", () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  // ... (Similar test cases for subtract, multiply, and divide)

  describe("divide function", () => {
    it("should throw error when dividing by zero", () => {
      expect(() => MathBasic.divide(1, 0)).toThrowError("Cannot divide by zero");
    });

    it("should return a / b when given two valid number parameters", () => {
      expect(MathBasic.divide(4, 2)).toEqual(2);
      expect(MathBasic.divide(9, 3)).toEqual(3);
      expect(MathBasic.divide(15, 3)).toEqual(5);
    });
  });
});
