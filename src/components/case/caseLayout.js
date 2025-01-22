// src/components/case/CaseLayout.js
export function createCaseLayout({
  title,
  description,
  transformFn,
  localStorageKey = "",
}) {
  // Main container for everything
  const container = document.createElement("div");
  container.className =
    "w-full h-full text-gray-7 dark:text-dark-6 p-2 flex flex-col gap-2";

  /**
   * 1) Top Header (Title + Description)
   */
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

  /**
   * 2) Body: Two columns side by side
   *    - Left: "Settings" area
   *    - Right: "Input", "Output", "Share Link" stacked
   */
  const bodyWrapper = document.createElement("div");
  bodyWrapper.className = "flex flex-row gap-4 h-full"; // side by side

  // Left column
  const leftCol = document.createElement("div");
  leftCol.className =
    "w-72 p-2 bg-gray-2 dark:bg-dark-3 rounded flex flex-col gap-2";

  // Left column heading ("Settings")
  const leftHeader = document.createElement("div");
  leftHeader.textContent = "Settings";
  leftHeader.className =
    "text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 pb-1";
  leftCol.appendChild(leftHeader);

  // Convert button
  const convertBtn = document.createElement("button");
  convertBtn.textContent = "Convert";
  convertBtn.className =
    "w-full py-2 rounded bg-gray-7 dark:bg-dark-6 text-white dark:text-white hover:bg-[#050c42] dark:hover:bg-dark-5";
  leftCol.appendChild(convertBtn);

  // Toggles
  //  - Auto Update
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

  //  - Remember Input
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

  // Right column
  const rightCol = document.createElement("div");
  rightCol.className = "flex-1 flex flex-col gap-4";

  /**
   *  Right column sections: Input, Output, Share Link
   */
  // -- INPUT SECTION --
  const inputSection = document.createElement("div");
  inputSection.className = "bg-gray-2 dark:bg-dark-3 rounded p-2";

  // Input header
  const inputHeader = document.createElement("div");
  inputHeader.textContent = "Input";
  inputHeader.className =
    "pb-2 text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 mb-2";

  const inputTextarea = document.createElement("textarea");
  inputTextarea.className =
    "w-full h-40 p-2 rounded border border-gray-3 dark:border-dark-4 bg-gray-1 dark:bg-dark-4 focus:outline-none resize-none";
  inputTextarea.placeholder = "Type or paste text here...";

  // Expand button (top-right)
  const expandInputBtn = document.createElement("button");
  expandInputBtn.title = "Expand";
  expandInputBtn.textContent = "⤢";
  expandInputBtn.className =
    "float-right text-sm text-gray-5 hover:text-gray-7 dark:hover:text-dark-5 -mt-6 mr-2";

  let isInputExpanded = false;
  expandInputBtn.addEventListener("click", () => {
    isInputExpanded = !isInputExpanded;
    // Toggle bigger height, for example
    inputTextarea.classList.toggle("h-80", isInputExpanded);
  });

  inputSection.appendChild(inputHeader);
  inputSection.appendChild(expandInputBtn);
  inputSection.appendChild(inputTextarea);

  // -- OUTPUT SECTION --
  const outputSection = document.createElement("div");
  outputSection.className = "bg-gray-2 dark:bg-dark-3 rounded p-2";

  const outputHeader = document.createElement("div");
  outputHeader.textContent = "Output";
  outputHeader.className =
    "pb-2 text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 mb-2";

  const outputTextarea = document.createElement("textarea");
  outputTextarea.readOnly = true;
  outputTextarea.className =
    "w-full h-32 p-2 rounded border border-gray-3 dark:border-dark-4 bg-gray-1 dark:bg-dark-4 focus:outline-none resize-none";

  // Copy & expand icons at bottom-right
  const outputFooter = document.createElement("div");
  outputFooter.className = "flex justify-end items-center gap-2 mt-2";

  const copyBtn = document.createElement("button");
  copyBtn.title = "Copy";
  copyBtn.textContent = "📋";
  copyBtn.className = "text-gray-5 hover:text-gray-7 dark:hover:text-dark-5";
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(outputTextarea.value || "");
    alert("Copied!");
  });

  const expandOutputBtn = document.createElement("button");
  expandOutputBtn.title = "Expand";
  expandOutputBtn.textContent = "⤢";
  expandOutputBtn.className =
    "text-gray-5 hover:text-gray-7 dark:hover:text-dark-5";

  let isOutputExpanded = false;
  expandOutputBtn.addEventListener("click", () => {
    isOutputExpanded = !isOutputExpanded;
    outputTextarea.classList.toggle("h-80", isOutputExpanded);
  });

  outputFooter.appendChild(copyBtn);
  outputFooter.appendChild(expandOutputBtn);

  outputSection.appendChild(outputHeader);
  outputSection.appendChild(outputTextarea);
  outputSection.appendChild(outputFooter);

  // -- SHARE LINK SECTION --
  const shareSection = document.createElement("div");
  shareSection.className = "bg-gray-2 dark:bg-dark-3 rounded p-2";

  const shareHeader = document.createElement("div");
  shareHeader.textContent = "Share Link";
  shareHeader.className =
    "pb-2 text-sm uppercase font-semibold text-gray-5 dark:text-dark-4 mb-2";

  const shareInput = document.createElement("input");
  shareInput.type = "text";
  shareInput.readOnly = true;
  shareInput.className =
    "w-full p-2 mb-2 rounded border border-gray-3 dark:border-dark-4 bg-gray-1 dark:bg-dark-4 focus:outline-none";
  shareInput.placeholder = "Click 'Generate' to create a link";

  const generateLinkBtn = document.createElement("button");
  generateLinkBtn.textContent = "Generate";
  generateLinkBtn.className =
    "px-4 py-2 bg-gray-1 dark:bg-dark-6 text-gray-7 dark:text-white rounded hover:bg-gray-3 dark:hover:bg-dark-5";

  generateLinkBtn.addEventListener("click", () => {
    const currentUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({ text: inputTextarea.value });
    shareInput.value = `${currentUrl}?${params.toString()}`;
  });

  shareSection.appendChild(shareHeader);
  shareSection.appendChild(shareInput);
  shareSection.appendChild(generateLinkBtn);

  // Put these three sections in rightCol
  rightCol.appendChild(inputSection);
  rightCol.appendChild(outputSection);
  rightCol.appendChild(shareSection);

  // Append leftCol + rightCol to bodyWrapper
  bodyWrapper.appendChild(leftCol);
  bodyWrapper.appendChild(rightCol);

  // 3) Add bodyWrapper to container
  container.appendChild(bodyWrapper);

  /**
   * Hook up logic: Convert button, auto update, remember input
   */
  function doConvert() {
    const original = inputTextarea.value || "";
    const converted = transformFn ? transformFn(original) : original;
    outputTextarea.value = converted;
  }

  // Convert button -> run transform
  convertBtn.addEventListener("click", doConvert);

  // Auto Update
  autoUpdateInput.addEventListener("change", () => {
    if (autoUpdateInput.checked) {
      inputTextarea.addEventListener("input", doConvert);
    } else {
      inputTextarea.removeEventListener("input", doConvert);
    }
  });

  // Remember Input
  if (localStorageKey) {
    // Load stored input if any
    const storedVal = localStorage.getItem(localStorageKey);
    if (storedVal) {
      inputTextarea.value = storedVal;
    }
  }
  rememberInput.addEventListener("change", () => {
    if (rememberInput.checked && localStorageKey) {
      inputTextarea.addEventListener("input", handleRemember);
    } else {
      inputTextarea.removeEventListener("input", handleRemember);
    }
  });
  function handleRemember() {
    if (rememberInput.checked && localStorageKey) {
      localStorage.setItem(localStorageKey, inputTextarea.value);
    }
  }

  // Return the fully assembled page
  return container;
}
