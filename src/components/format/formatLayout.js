// src/components/format/formatLayout.js
export function createFormatLayout({
  title,
  description,
  transformFn,
  localStorageKey = "",
  hasIndentationOptions = false,
  isViewer = false,
}) {
  const container = document.createElement("div");
  container.className =
    "w-full h-full text-gray-7 dark:text-dark-6 p-2 flex flex-col gap-2 no-scrollbar";

  // Header Section
  const header = document.createElement("div");
  header.className = "mb-2";

  const h1 = document.createElement("h1");
  h1.textContent = title;
  h1.className = "text-2xl font-bold mb-1 text-gray-4 dark:text-dark-6";

  const pDesc = document.createElement("p");
  pDesc.textContent = description;
  pDesc.className = "text-sm text-gray-5 dark:text-dark-3";

  header.appendChild(h1);
  header.appendChild(pDesc);
  container.appendChild(header);

  // Body Layout
  const bodyWrapper = document.createElement("div");
  bodyWrapper.className = "flex flex-row gap-4 h-full";

  // Settings Panel (Left)
  const leftCol = document.createElement("div");
  leftCol.className =
    "w-72 p-2 bg-gray-3 dark:bg-dark-3 rounded flex flex-col gap-2";

  const settingsHeader = document.createElement("div");
  settingsHeader.textContent = "Settings";
  settingsHeader.className =
    "text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 pb-1";
  leftCol.appendChild(settingsHeader);

  // Common Settings
  const autoUpdateWrap = document.createElement("label");
  autoUpdateWrap.className = "flex items-center gap-2 cursor-pointer";
  const autoUpdateInput = document.createElement("input");
  autoUpdateInput.type = "checkbox";
  autoUpdateInput.className = "toggle-checkbox";
  const autoUpdateSpan = document.createElement("span");
  autoUpdateSpan.textContent = "Auto Update";

  autoUpdateWrap.appendChild(autoUpdateInput);
  autoUpdateWrap.appendChild(autoUpdateSpan);
  leftCol.appendChild(autoUpdateWrap);

  const rememberWrap = document.createElement("label");
  rememberWrap.className = "flex items-center gap-2 cursor-pointer";
  const rememberInput = document.createElement("input");
  rememberInput.type = "checkbox";
  rememberInput.className = "toggle-checkbox";
  const rememberSpan = document.createElement("span");
  rememberSpan.textContent = "Remember Input";

  rememberWrap.appendChild(rememberInput);
  rememberWrap.appendChild(rememberSpan);
  leftCol.appendChild(rememberWrap);

  // Indentation Options (For Formatters)
  if (hasIndentationOptions) {
    const indentTypeDiv = document.createElement("div");
    indentTypeDiv.className = "mt-2";

    const indentLabel = document.createElement("label");
    indentLabel.textContent = "Indent Type:";
    indentLabel.className = "text-sm text-gray-5 dark:text-dark-4";

    const indentSelect = document.createElement("select");
    indentSelect.className = "ml-2 p-1 rounded bg-gray-1 dark:bg-dark-4";
    indentSelect.innerHTML = `
      <option value="space">Spaces</option>
      <option value="tab">Tabs</option>
    `;

    indentTypeDiv.appendChild(indentLabel);
    indentTypeDiv.appendChild(indentSelect);
    leftCol.appendChild(indentTypeDiv);

    const indentSizeDiv = document.createElement("div");
    indentSizeDiv.className = "mt-1";

    const sizeLabel = document.createElement("label");
    sizeLabel.textContent = "Indent Size:";
    sizeLabel.className = "text-sm text-gray-5 dark:text-dark-4";

    const sizeInput = document.createElement("input");
    sizeInput.type = "number";
    sizeInput.min = "2";
    sizeInput.max = "8";
    sizeInput.value = "2";
    sizeInput.className = "ml-2 w-16 p-1 rounded bg-gray-1 dark:bg-dark-4";

    indentSizeDiv.appendChild(sizeLabel);
    indentSizeDiv.appendChild(sizeInput);
    leftCol.appendChild(indentSizeDiv);
  }

  // Main Content (Right)
  const rightCol = document.createElement("div");
  rightCol.className = "flex-1 flex flex-col gap-2";

  // Input Section
  const inputSection = document.createElement("div");
  inputSection.className = "bg-gray-3 dark:bg-dark-3 rounded p-2";

  const inputHeader = document.createElement("div");
  inputHeader.textContent = "Input";
  inputHeader.className =
    "pb-1 text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 mb-1";

  const inputTextarea = document.createElement("textarea");
  inputTextarea.className =
    "w-full h-40 p-1 rounded border border-gray-3 dark:border-dark-4 bg-gray-1 dark:bg-dark-4 focus:outline-none resize-none no-scrollbar";
  inputTextarea.placeholder = "Enter your JSON/XML here...";

  inputSection.appendChild(inputHeader);
  inputSection.appendChild(inputTextarea);

  // Output Section
  const outputSection = document.createElement("div");
  outputSection.className = "bg-gray-3 dark:bg-dark-3 rounded p-2";

  const outputHeader = document.createElement("div");
  outputHeader.textContent = isViewer ? "Formatted View" : "Output";
  outputHeader.className =
    "pb-1 text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 mb-1";

  const outputPre = document.createElement("pre");
  outputPre.className =
    "w-full h-80 p-2 rounded border border-gray-3 dark:border-dark-4 bg-gray-1 dark:bg-dark-4 overflow-auto no-scrollbar";
  const outputCode = document.createElement("code");
  outputPre.appendChild(outputCode);

  outputSection.appendChild(outputHeader);
  outputSection.appendChild(outputPre);

  rightCol.appendChild(inputSection);
  rightCol.appendChild(outputSection);

  bodyWrapper.appendChild(leftCol);
  bodyWrapper.appendChild(rightCol);
  container.appendChild(bodyWrapper);

  // Transformation Logic
  function processInput() {
    try {
      const input = inputTextarea.value;
      const result = transformFn(input);
      outputCode.textContent = result;
      outputPre.classList.remove("border-red-500");
    } catch (error) {
      outputCode.textContent = error.message;
      outputPre.classList.add("border-red-500");
    }
  }

  // Event Listeners
  autoUpdateInput.addEventListener("change", () => {
    if (autoUpdateInput.checked) {
      inputTextarea.addEventListener("input", processInput);
    } else {
      inputTextarea.removeEventListener("input", processInput);
    }
  });

  rememberInput.addEventListener("change", () => {
    if (rememberInput.checked && localStorageKey) {
      localStorage.setItem(localStorageKey, inputTextarea.value);
    }
  });

  // Initial Load
  if (localStorageKey) {
    const savedValue = localStorage.getItem(localStorageKey);
    if (savedValue) {
      inputTextarea.value = savedValue;
      processInput();
    }
  }

  return container;
}
