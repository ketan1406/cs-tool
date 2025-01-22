// src/components/case/constantCase.js
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed
/*
  kebab-case:
  Example: "Hello World" -> "hello-world"
*/
function toKebabCase(str) {
  return str
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase())
    .join("-");
}

export function createKebabCasePage() {
  return createCaseLayout({
    title: "Kebab Case Converter",
    description: "Convert string to kebab case. (kebab-case)",
    transformFn: toKebabCase,
    localStorageKey: "kebabCaseInput",
  });
}
