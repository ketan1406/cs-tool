// src/components/case/constantCase.js
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed
// UpperCase transforms the entire string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}
export function createUpperCasePage() {
  return createCaseLayout({
    title: "Upper Case Converter",
    description: "Convert string to upper case. (UPPER CASE)",
    transformFn: toUpperCase,
    localStorageKey: "upperCaseInput",
  });
}
