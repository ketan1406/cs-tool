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
    const groupTitleContainer = document.createElement("div");
    groupTitleContainer.className = "mb-3";

    const groupTitle = document.createElement("div");
    groupTitle.textContent = group.label;
    groupTitle.className =
      "flex items-center justify-between pb-5 text-sm font-semibold text-gray-4 dark:text-dark-3 uppercase cursor-pointer";

    // Add arrow SVG for dropdown
    const arrow = document.createElement("span");
    arrow.innerHTML = `
      <svg
        class="absolute right-3.5 top-1/2 -translate-y-1/2 fill-current transition-transform duration-200"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5525 7.72801C10.81 7.50733 11.1899 7.50733 11.4474 7.72801L17.864 13.228C18.1523 13.4751 18.1857 13.9091 17.9386 14.1974C17.6915 14.4857 17.2575 14.5191 16.9692 14.272L10.9999 9.15549L5.03068 14.272C4.7424 14.5191 4.30838 14.4857 4.06128 14.1974C3.81417 13.9091 3.84756 13.4751 4.13585 13.228L10.5525 7.72801Z"
          fill="currentColor"
        />
      </svg>
    `;

    groupTitle.appendChild(arrow);
    groupTitleContainer.appendChild(groupTitle);

    const groupList = document.createElement("ul");
    groupList.className = "mb-6 space-y-2 hidden"; // Initially hidden

    // Add dropdown items
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

    groupTitleContainer.appendChild(groupList);
    sidebar.appendChild(groupTitleContainer);

    // Toggle dropdown functionality
    groupTitle.addEventListener("click", () => {
      const isOpen = groupList.classList.contains("hidden");
      groupList.classList.toggle("hidden", !isOpen);
      arrow.firstElementChild.classList.toggle("rotate-180", isOpen);
    });
  });

  return sidebar;
}
