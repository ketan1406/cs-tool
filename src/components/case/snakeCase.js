// LowerCase transforms the entire string to lowercase
import { createCaseLayout } from "./caseLayout.js"; // relative path as needed
/*
  snake_case:
  Example: "Hello World" -> "hello_world"
*/
function toSnakeCase(str) {
  return str
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase())
    .join("_");
}

export function createSnakeCasePage() {
  return createCaseLayout({
    title: "Snake Case Converter",
    description: "Convert string to snake case. (snake_case)",
    transformFn: toSnakeCase,
    localStorageKey: "snakeCaseInput",
  });
}
