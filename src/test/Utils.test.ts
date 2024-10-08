import {
  checkAllStringCaseAndChar,
  StringCaseType,
  StringUtils,
  toUpperCase,
} from "../app/Utils";

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
  it("checking checkAllStringCaseAndChar ", () => {});
});
describe("checking checkAllStringCaseAndChar", () => {
  const expected: StringCaseType = {
    lowerCase: "abc",
    upperCase: "ABC",
    length: 3,
    characters: ["a", "B", "c"],
    extra: {},
  };
  const sute = checkAllStringCaseAndChar;
  const actual = sute("aBc");

  it("string should be lowercase", () => {
    expect(actual.lowerCase).toBe(expected.lowerCase);
  });
  it("string should be uppercase", () => {
    expect(actual.upperCase).toBe(expected.upperCase);
  });
  it("checking length", () => {
    expect(actual.length).toBe(expected.length);
  });
  it("checking characters", () => {
    expect(actual.characters).toEqual(expected.characters);
  });
  it("extra shuld be object", () => {
    expect(actual.extra).toEqual(expected.extra);
  });
});

describe("checking string shuld be lowercase", () => {
  it.each([
    { input: "aBc", expected: "abc" },
    { input: "aBC", expected: "abc" },
    { input: "abc", expected: "abc" },
    { input: "MY-STRING", expected: "my-string" },
  ])("$input toLowerCase is $expected", ({ input, expected }) => {
    const actual = checkAllStringCaseAndChar(input);
    expect(actual.lowerCase).toBe(expected);
  });
});

describe("StringUtils suite", () => {
  let suite: StringUtils;

  beforeEach(() => {
    suite = new StringUtils();
  });

  it("Should throw error on Invalid argument", () => {
    function expectedError() {
      suite.toUpperCase("");
    }
    expect(expectedError).toThrow();
    expect(expectedError).toThrow('Invalid argument!')
  });
});
