// src/components/case/constantCase.js
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed
/*
  UpperCamelCase (often called PascalCase):
  Example: "hello world" -> "HelloWorld"
*/
function toUpperCamelCase(str) {
  // Split on anything non-alphanumeric or on spaces
  const words = str.split(/[\s_\-]+/).filter(Boolean);
  const transformed = words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
  return transformed;
}

export function createUpperCamelCasePage() {
  return createCaseLayout({
    title: "Upper Camel Case Converter",
    description: "Convert string to upper camel case. (UpperCamelCase)",
    transformFn: toUpperCamelCase,
    localStorageKey: "upperCamelCaseInput",
  });
}
