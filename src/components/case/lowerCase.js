// LowerCase transforms the entire string to lowercase
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed

function toLowerCase(str) {
  return str.toLowerCase();
}
export function createLowerCasePage() {
  return createCaseLayout({
    title: "Lower Case Converter",
    description: "Convert string to lower case. (lower case)",
    transformFn: toLowerCase,
    localStorageKey: "lowerCaseInput",
  });
}
