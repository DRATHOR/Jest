import { toUpperCase } from "../app/Utils";

describe("Utils it suite", () => {
  it("Should return uppercase", () => {
    const sute = toUpperCase;
    const expected = "ABC";

    const actual = sute("abc");

    expect(actual).toBe(expected);
  });

  it("Should return uppercase of varchar", () => {
    const sute = toUpperCase;
    const expected = "12XYZ";

    const actual = sute("12xyz");

    expect(actual).toBe(expected);
  });

  it("Should return uppercase of varchar with spacial char", () => {
    const sute = toUpperCase;
    const expected = "12X@YZ#";

    const actual = sute("12x@yz#");

    expect(actual).toBe(expected);
  });

  it("Should return uppercase of numeric", () => {
    const sute = toUpperCase;
    const expected = "1234";

    const actual = sute("1234");

    expect(actual).toBe(expected);
  });

  it("Should return uppercase of special char", () => {
    const sute = toUpperCase;
    const expected = "@#$@#";

    const actual = sute("@#$@#");

    expect(actual).toBe(expected);
  });
});
