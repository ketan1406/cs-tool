import { createFormatLayout } from "../formatLayout";

export function createJSONFormatter() {
  return createFormatLayout({
    title: "JSON Formatter",
    description: "Format JSON with proper indentation",
    transformFn: (input) => {
      try {
        const parsed = JSON.parse(input);
        return JSON.stringify(parsed, null, 2);
      } catch (e) {
        throw new Error(`Formatting Error: ${e.message}`);
      }
    },
    hasIndentationOptions: true,
    localStorageKey: "jsonFormatterInput",
  });
}
