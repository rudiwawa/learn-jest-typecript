import MathBasic from "./MathBasic";
import { expect, it, describe } from "@jest/globals";

describe("A MathBasic", () => {
  it("should contains add, subtract, multiply, and divide function", () => {
    expect(MathBasic).toHaveProperty("add");
    expect(MathBasic).toHaveProperty("subtract");
    expect(MathBasic).toHaveProperty("multiply");
    expect(MathBasic).toHaveProperty("divide");
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe("A add function", () => {
    it("should throw error when not given 2 parameters", () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

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

  // ... (The rest of the test cases remain the same, just add type assertions where necessary)
});
