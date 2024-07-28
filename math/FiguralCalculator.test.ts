import FigureCalculator from "./FigureCalculator";
import type { MathBasicInterface } from "./MathBasic";
import { jest } from "@jest/globals";

describe("A FigureCalculator", () => {
  let figureCalculator: FigureCalculator;
  let mockMathBasic: jest.Mocked<MathBasicInterface>;

  beforeEach(() => {
    mockMathBasic = {
      add: jest.fn(),
      subtract: jest.fn(),
      multiply: jest.fn(),
      divide: jest.fn(),
    };
    figureCalculator = new FigureCalculator(mockMathBasic);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have required calculation methods", () => {
    const requiredMethods = [
      "calculateRectanglePerimeter",
      "calculateRectangleArea",
      "calculateTrianglePerimeter",
      "calculateTriangleArea",
    ];

    requiredMethods.forEach((method) => {
      expect(figureCalculator).toHaveProperty(method);
      expect(figureCalculator[method]).toBeInstanceOf(Function);
    });
  });

  describe("Rectangle calculations", () => {
    const length = 20;
    const width = 10;

    describe("calculateRectanglePerimeter", () => {
      it("should throw error for non-number parameters", () => {
        const invalidInputs = [
          [true, {}],
          [null, "2"],
          [[], {}],
        ];

        invalidInputs.forEach(([l, w]) => {
          expect(() =>
            figureCalculator.calculateRectanglePerimeter(l as any, w as any)
          ).toThrow();
        });
      });

      it("should calculate rectangle perimeter correctly", () => {
        mockMathBasic.add.mockReturnValue(30);
        mockMathBasic.multiply.mockReturnValue(60);

        const result = figureCalculator.calculateRectanglePerimeter(
          length,
          width
        );

        expect(result).toBe(60);
        expect(mockMathBasic.add).toHaveBeenCalledWith(length, width);
        expect(mockMathBasic.multiply).toHaveBeenCalledWith(2, 30);
      });
    });

    describe("calculateRectangleArea", () => {
      it("should throw error for non-number parameters", () => {
        const invalidInputs = [
          [true, {}],
          [null, "2"],
          [[], {}],
        ];

        invalidInputs.forEach(([l, w]) => {
          expect(() =>
            figureCalculator.calculateRectangleArea(l as any, w as any)
          ).toThrow();
        });
      });

      it("should calculate rectangle area correctly", () => {
        mockMathBasic.multiply.mockReturnValue(200);

        const result = figureCalculator.calculateRectangleArea(length, width);

        expect(result).toBe(200);
        expect(mockMathBasic.multiply).toHaveBeenCalledWith(length, width);
      });
    });
  });

  describe("Triangle calculations", () => {
    const sideA = 3;
    const sideB = 4;
    const base = 5;
    const height = 15;

    describe("calculateTrianglePerimeter", () => {
      it("should throw error for non-number parameters", () => {
        const invalidInputs = [
          [true, {}, "3"],
          [null, 2, []],
        ];

        invalidInputs.forEach(([a, b, c]) => {
          expect(() =>
            figureCalculator.calculateTrianglePerimeter(
              a as any,
              b as any,
              c as any
            )
          ).toThrow();
        });
      });

      it("should calculate triangle perimeter correctly", () => {
        mockMathBasic.add
          .mockReturnValueOnce(9) // sideB + base
          .mockReturnValueOnce(12); // sideA + (sideB + base)

        const result = figureCalculator.calculateTrianglePerimeter(
          sideA,
          sideB,
          base
        );

        expect(result).toBe(12);
        expect(mockMathBasic.add).toHaveBeenCalledTimes(2);
        expect(mockMathBasic.add).toHaveBeenNthCalledWith(1, sideB, base);
        expect(mockMathBasic.add).toHaveBeenNthCalledWith(2, sideA, 9);
      });
    });

    describe("calculateTriangleArea", () => {
      it("should throw error for non-number parameters", () => {
        const invalidInputs = [
          [true, {}],
          [null, "2"],
          [[], {}],
        ];

        invalidInputs.forEach(([b, h]) => {
          expect(() =>
            figureCalculator.calculateTriangleArea(b as any, h as any)
          ).toThrow();
        });
      });

      it("should calculate triangle area correctly", () => {
        mockMathBasic.multiply.mockReturnValue(75);
        mockMathBasic.divide.mockReturnValue(37.5);

        const result = figureCalculator.calculateTriangleArea(base, height);

        expect(result).toBe(37.5);
        expect(mockMathBasic.multiply).toHaveBeenCalledWith(base, height);
        expect(mockMathBasic.divide).toHaveBeenCalledWith(75, 2);
      });
    });
  });
});
