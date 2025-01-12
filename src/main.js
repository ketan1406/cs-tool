document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const sidebarItems = document.querySelectorAll("#sidebar nav ul li");
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const convertBtn = document.getElementById("convert-btn");

  // Get the current theme from localStorage or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // Toggle the theme and update the icon
  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  // Function to update the theme icon
  function updateThemeIcon(theme) {
    themeIcon.src =
      theme === "light"
        ? "https://img.icons8.com/?size=100&id=3dxwW3xZfAj4&format=png&color=000000"
        : "https://img.icons8.com/?size=100&id=LfYPCFXwNh5t&format=png&color=000000";
    themeIcon.alt = theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  }

  // Sidebar Navigation Handling
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      document.querySelector("header h1").textContent = `${item.textContent} Section`;
    });
  });

  // Convert Button Example Functionality
  convertBtn.addEventListener("click", () => {
    output.value = input.value.toUpperCase(); // Example: Convert to uppercase
  });
});
