import { createFormatLayout } from "../formatLayout";

export function createJSONValidator() {
  return createFormatLayout({
    title: "JSON Validator",
    description: "Validate JSON syntax and structure",
    transformFn: (input) => {
      try {
        JSON.parse(input);
        return "✓ Valid JSON";
      } catch (e) {
        throw new Error(`Validation Error: ${e.message}`);
      }
    },
    localStorageKey: "jsonValidatorInput",
  });
}
