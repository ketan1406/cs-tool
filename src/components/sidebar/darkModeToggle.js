export function createDarkModeToggle() {
  const toggle = document.createElement("div");
  toggle.className =
    "flex items-center gap-2 p-2 cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-700";

  // Set initial mode
  const currentMode = localStorage.getItem("color-mode") || "light";
  document.documentElement.setAttribute("data-theme", currentMode);

  toggle.innerHTML = `
    <img src="/assets/${
      currentMode === "dark" ? "dark-mode-icon" : "light-mode-icon"
    }.svg" alt="${currentMode} mode" class="h-5 w-5" />
    <span>${currentMode === "dark" ? "Dark Mode" : "Light Mode"}</span>
  `;

  toggle.addEventListener("click", () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newMode);
    localStorage.setItem("color-mode", newMode);

    toggle.innerHTML = `
      <img src="/assets/${
        newMode === "dark" ? "dark-mode-icon" : "light-mode-icon"
      }.svg" alt="${newMode} mode" class="h-5 w-5" />
      <span>${newMode === "dark" ? "Dark Mode" : "Light Mode"}</span>
    `;
  });

  return toggle;
}
