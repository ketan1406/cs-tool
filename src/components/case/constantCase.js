// src/components/case/constantCase.js
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed

function toConstantCase(str) {
  // Example transform
  return str
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .map((w) => w.toUpperCase())
    .join("_");
}

export function createConstantCasePage() {
  return createCaseLayout({
    title: "Constant Case Converter",
    description:
      "Convert string to constant case. (Screaming snake case, MACRO_CASE)",
    transformFn: toConstantCase,
    localStorageKey: "constantCaseInput",
  });
}
