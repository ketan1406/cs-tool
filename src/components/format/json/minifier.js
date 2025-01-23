import { createFormatLayout } from "../formatLayout";

export function createJSONMinifier() {
  return createFormatLayout({
    title: "JSON Minifier",
    description: "Minify JSON by removing whitespace",
    transformFn: (input) => {
      try {
        const parsed = JSON.parse(input);
        return JSON.stringify(parsed);
      } catch (e) {
        throw new Error(`Minification Error: ${e.message}`);
      }
    },
    localStorageKey: "jsonMinifierInput",
  });
}
