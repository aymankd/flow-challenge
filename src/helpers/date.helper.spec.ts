import { toCompleteFrenchDateformat, toFrenchDateformat } from "./date.helper";

describe("date helper", () => {
  describe("toFrenchDateformat", () => {
    it("should return a date in french format", () => {
      const date = new Date("2021-03-05");
      expect(toFrenchDateformat(date)).toEqual("05/03/2021");
    });
  });
  describe("toCompleteFrenchDateformat", () => {
    it("should return a date in french format", () => {
      const date = new Date("2021-03-05");
      expect(toCompleteFrenchDateformat(date)).toEqual("vendredi 5 mars 2021");
    });
  });
});
