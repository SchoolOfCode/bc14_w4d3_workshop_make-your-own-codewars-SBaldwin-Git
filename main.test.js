//👉 Write your tests below here:

import { productCodeChecker } from "./main";

// Test the productCodeChecker function returns a string

test("productCodeChecker returns a string", () => {
  expect(typeof productCodeChecker("1234567890")).toBe("string");
});

// Test the productCodeChecker function returns the correct product code with letters trimmed

test("productCodeChecker returns the correct product code with letters trimmed", () => {
  expect(productCodeChecker("123abcd4567")).toBe("123-4567");
});

// Test the productCodeChecker function returns Invalid Product Code if string is too big

test("productCodeChecker returns Invalid Product Code if final string is too big", () => {
  expect(productCodeChecker("12gseg3456gseg7w890")).toBe("Invalid Product Code");
});

// Test the productCodeChecker function returns Invalid Product Code if string is too small

test("productCodeChecker returns Invalid Product Code if final string is too small", () => {
  expect(productCodeChecker("1Qad234d5ded6w7")).toBe("Invalid Product Code");
});
