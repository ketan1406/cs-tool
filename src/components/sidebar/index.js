import { createSidebarItem } from "./sidebarItem.js";
import { createDarkModeToggle } from "./darkModeToggle.js";

export function createSidebar(menuGroups) {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  // Header with Dark Mode Toggle
  const header = document.createElement("div");
  header.className = "sidebar-header";

  const title = document.createElement("h1");
  title.textContent = "Online Tool";
  title.className = "text-lg font-bold";

  const toggle = createDarkModeToggle();
  header.appendChild(title);
  header.appendChild(toggle);

  sidebar.appendChild(header);

  // Menu Items
  menuGroups.forEach((group) => {
    const item = createSidebarItem(group);
    sidebar.appendChild(item);
  });

  return sidebar;
}
