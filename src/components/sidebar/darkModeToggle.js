export function createDarkModeToggle() {
  const toggle = document.createElement("div");
  toggle.className =
    "dark-mode-toggle relative flex h-12 w-24 items-center gap-2 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out bg-gray-2 dark:bg-dark-2";

  // Create slider
  const slider = document.createElement("div");
  slider.className =
    "dark-mode-slider absolute h-10 w-10 flex items-center justify-center rounded-full transition-transform duration-300 bg-white dark:bg-dark-3";

  // Add SVG inside the slider
  const svgIcon = document.createElement("img");
  const initialMode = localStorage.getItem("color-mode") || "light";
  svgIcon.src =
    initialMode === "dark"
      ? "./assets/dark-mode-icon.svg"
      : "./assets/light-mode-icon.svg";
  svgIcon.className = "h-6 w-6 transition-transform duration-300";
  slider.appendChild(svgIcon);

  // Initial slider position
  slider.style.transform =
    initialMode === "dark" ? "translateX(48px)" : "translateX(0)";
  toggle.appendChild(slider);

  // Set initial mode on document
  document.documentElement.classList.toggle("dark", initialMode === "dark");

  // Click Event to toggle mode
  toggle.addEventListener("click", () => {
    // Toggle between dark and light mode
    const currentMode = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newMode = currentMode === "light" ? "dark" : "light";

    // Save new mode to localStorage
    localStorage.setItem("color-mode", newMode);

    // Toggle dark class on <html>
    document.documentElement.classList.toggle("dark", newMode === "dark");

    // Update slider position and icon
    slider.style.transform =
      newMode === "dark" ? "translateX(48px)" : "translateX(0)";
    svgIcon.src =
      newMode === "dark"
        ? "./assets/dark-mode-icon.svg"
        : "./assets/light-mode-icon.svg";
  });

  return toggle;
}
