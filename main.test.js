//👉 Write your tests below here:

import { leapYearChecker } from "./main";

// Test the leapYearCheacker function returns true for the year 2024

test("leapYearChecker returns true for the year 2024", () => {
  expect(leapYearChecker(2024)).toBe(true);
});

// Test the leapYearCheacker function returns false for the year 2025

test("leapYearChecker returns false for the year 2025", () => {
  expect(leapYearChecker(2025)).toBe(false);
});

// Test the leapYearCheacker function returns false for the year 2200

test("leapYearChecker returns false for the year 2200", () => {
  expect(leapYearChecker(2200)).toBe(false);
});

// Test the leapYearCheacker function returns false for the year 1600

test("leapYearChecker returns true for the year 1600", () => {
  expect(leapYearChecker(1600)).toBe(true);
});

// Test the leapYearCheacker function returns false for the year 1877

test("leapYearChecker returns false for the year 1877", () => {
  expect(leapYearChecker(1877)).toBe(false);
}   );