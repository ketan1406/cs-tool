// UpperCase transforms the entire string to uppercase
export function createUpperCasePage() {
  // Container
  const container = document.createElement("div");
  container.className = "p-4 text-gray-7 dark:text-dark-6";

  // Title
  const title = document.createElement("h2");
  title.textContent = "UPPER CASE Converter";
  title.className = "text-xl mb-4";
  container.appendChild(title);

  // Textarea
  const textarea = document.createElement("textarea");
  textarea.className =
    "w-full h-32 p-2 mb-4 border border-gray-3 dark:border-dark-2 rounded";
  textarea.placeholder = "Type or paste text here...";
  container.appendChild(textarea);

  // Result
  const result = document.createElement("div");
  result.className = "bg-gray-2 dark:bg-dark-2 p-2 rounded min-h-[50px]";
  container.appendChild(result);

  // Button
  const button = document.createElement("button");
  button.textContent = "Convert to UPPER CASE";
  button.className =
    "mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-light";

  // On click -> transform
  button.addEventListener("click", () => {
    const input = textarea.value || "";
    result.textContent = input.toUpperCase();
  });

  container.appendChild(button);
  return container;
}
