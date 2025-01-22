export function createDarkModeToggle() {
  const toggle = document.createElement("div");
  toggle.className =
    "dark-mode-toggle relative flex h-12 w-28 items-center gap-2 rounded-full pl-4 cursor-pointer transition-all duration-300 ease-in-out bg-gray-3 dark:bg-dark-2";

  // Create slider
  const slider = document.createElement("div");
  slider.className =
    "dark-mode-slider absolute h-10 w-10 flex items-center justify-center rounded-full transition-transform duration-300 bg-white dark:bg-dark-6";

  // Determine initial mode from localStorage or default to 'light'
  const initialMode = localStorage.getItem("color-mode") || "light";

  // Local image URLs (assuming they're in public/assets/)
  const moonIconURL = "./assets/icon-moon.png";
  const sunIconURL = "./assets/icon-sun.png";

  // Create span to hold the icon
  const iconSpan = document.createElement("span");

  // Set icon based on initialMode
  iconSpan.innerHTML =
    initialMode === "dark"
      ? `<img class="h-8 w-8" src="${moonIconURL}" alt="Dark Mode Icon" />`
      : `<img class="h-8 w-8" src="${sunIconURL}" alt="Light Mode Icon" />`;

  // Append icon to slider
  slider.appendChild(iconSpan);

  // Set initial slider position
  slider.style.transform =
    initialMode === "dark" ? "translateX(48px)" : "translateX(0)";

  // Append slider to toggle
  toggle.appendChild(slider);

  // Reflect the initial mode on the <html> tag
  document.documentElement.classList.toggle("dark", initialMode === "dark");

  // Click to toggle
  toggle.addEventListener("click", () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const newMode = currentlyDark ? "light" : "dark";

    // Save to localStorage
    localStorage.setItem("color-mode", newMode);

    // Toggle .dark on <html>
    document.documentElement.classList.toggle("dark", newMode === "dark");

    // Move slider
    slider.style.transform =
      newMode === "dark" ? "translateX(48px)" : "translateX(0)";

    // Update icon
    iconSpan.innerHTML =
      newMode === "dark"
        ? `<img class="h-8 w-8" src="${moonIconURL}" alt="Dark Mode Icon" />`
        : `<img class="h-8 w-8" src="${sunIconURL}" alt="Light Mode Icon" />`;
  });

  return toggle;
}
