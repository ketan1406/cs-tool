// src/components/case/constantCase.js
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed
/*
  lowerCamelCase:
  Example: "hello world" -> "helloWorld"
*/
function toLowerCamelCase(str) {
  // First convert to UpperCamelCase
  const upperCamel = str
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");

  // then just lowercase the first letter
  if (!upperCamel) return "";
  return upperCamel.charAt(0).toLowerCase() + upperCamel.slice(1);
}

export function createLowerCamelCasePage() {
  return createCaseLayout({
    title: "Lower Camel Case Converter",
    description: "Convert string to lower camel case. (lowerCamelCase)",
    transformFn: toLowerCamelCase,
    localStorageKey: "lowerCamelCaseInput",
  });
}
