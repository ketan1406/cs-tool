import { createSidebarDropdown } from "./sidebarDropdown.js";

export function createSidebarItem(item) {
  const container = document.createElement("div");
  container.className = "sidebar-item";

  const title = document.createElement("div");
  title.className = "item-title";
  title.textContent = item.label;

  const dropdown = item.children ? createSidebarDropdown(item.children) : null;

  if (dropdown) {
    title.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });
  }

  container.appendChild(title);
  if (dropdown) container.appendChild(dropdown);

  return container;
}
