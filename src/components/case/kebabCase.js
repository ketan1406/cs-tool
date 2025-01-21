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
  const container = document.createElement("div");
  container.className = "p-4 text-gray-7 dark:text-dark-6";

  const title = document.createElement("h2");
  title.textContent = "kebab-case Converter";
  title.className = "text-xl mb-4";
  container.appendChild(title);

  const textarea = document.createElement("textarea");
  textarea.className =
    "w-full h-32 p-2 mb-4 border border-gray-3 dark:border-dark-2 rounded";
  textarea.placeholder = "Type or paste text here...";
  container.appendChild(textarea);

  const result = document.createElement("div");
  result.className = "bg-gray-2 dark:bg-dark-2 p-2 rounded min-h-[50px]";
  container.appendChild(result);

  const button = document.createElement("button");
  button.textContent = "Convert to kebab-case";
  button.className =
    "mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-light";

  button.addEventListener("click", () => {
    const input = textarea.value || "";
    result.textContent = toKebabCase(input);
  });

  container.appendChild(button);
  return container;
}
