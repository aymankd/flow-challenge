import { toEuroFormat } from "./currency.helper";

describe("currency helper", () => {
  describe("toEuroFormat", () => {
    it("should return number in euro curreny format", () => {
      expect(toEuroFormat(1)).toContain("1,00");
      expect(toEuroFormat(100000)).toContain("100.000,00");
      expect(toEuroFormat(10000.153)).toContain("10.000,15");
    });
  });
});
