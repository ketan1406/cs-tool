import { createDarkModeToggle } from "./darkModeToggle.js";

export function createSidebar(menuGroups) {
  const sidebar = document.createElement("aside");
  sidebar.className =
    "w-72 bg-gray dark:bg-dark h-screen p-4 border-r border-gray-3 dark:border-dark-2";

  // Sidebar Header
  const header = document.createElement("div");
  header.className = "flex items-center justify-between mb-6";
  const title = document.createElement("h1");
  title.textContent = "CS Tool";
  title.className = "text-lg font-bold text-primary dark:text-white";
  header.appendChild(title);
  header.appendChild(createDarkModeToggle());
  sidebar.appendChild(header);

  // Sidebar Menu
  menuGroups.forEach((group) => {
    const groupTitle = document.createElement("h2");
    groupTitle.textContent = group.label;
    groupTitle.className =
      "text-sm font-semibold text-gray-4 dark:text-dark-3 uppercase mb-3";
    sidebar.appendChild(groupTitle);

    const groupList = document.createElement("ul");
    groupList.className = "mb-6 space-y-2";

    group.children.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.route;
      link.textContent = item.label;
      link.className =
        "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-2 dark:hover:bg-dark-2 text-gray-5 dark:text-dark-6 transition-colors duration-200 ease-in-out";
      listItem.appendChild(link);
      groupList.appendChild(listItem);
    });

    sidebar.appendChild(groupList);
  });

  return sidebar;
}
