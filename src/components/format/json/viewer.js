import { createFormatLayout } from "../formatLayout";

export function createJSONViewer() {
  return createFormatLayout({
    title: "JSON Viewer",
    description: "Visualize JSON structure in a tree view",
    transformFn: (input) => {
      try {
        const parsed = JSON.parse(input);
        // Add more sophisticated formatting for viewer
        return JSON.stringify(parsed, null, 2)
          .replace(/[{]/g, "{ ")
          .replace(/[}]/g, " }")
          .replace(/[:]/g, ": ");
      } catch (e) {
        throw new Error(`Viewer Error: ${e.message}`);
      }
    },
    isViewer: true,
    localStorageKey: "jsonViewerInput",
  });
}
