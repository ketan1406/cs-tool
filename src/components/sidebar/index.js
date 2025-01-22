import { createDarkModeToggle } from "./darkModeToggle.js";

export function createSidebar(menuGroups) {
  const sidebar = document.createElement("aside");
  sidebar.className =
    "w-72 bg-gray dark:bg-dark p-4 border-r border-gray-3 dark:border-dark-2 h-full overflow-y-auto no-scrollbar";

  // Sidebar Header
  const header = document.createElement("div");
  header.className = "flex items-center justify-between mb-6";

  // Add title container
  const titleContainer = document.createElement("div");
  titleContainer.className = "flex items-center gap-3";

  // Add the tool icon
  const toolIcon = document.createElement("img");
  toolIcon.src = "./assets/icon-tools.png"; // Path to your tool icon
  toolIcon.alt = "Tool Icon";
  toolIcon.className = "h-8 w-8"; // Adjust size as needed

  // Add the title text
  const title = document.createElement("h1");
  title.textContent = "CS Tool";
  title.className = "text-2xl font-bold text-primary dark:text-white";

  // Append the icon and title to the container
  titleContainer.appendChild(toolIcon);
  titleContainer.appendChild(title);

  // Append the title container to the header
  header.appendChild(titleContainer);

  // Append the dark mode toggle to the header
  header.appendChild(createDarkModeToggle());

  // Append the header to the sidebar
  sidebar.appendChild(header);

  // Sidebar Menu
  menuGroups.forEach((group) => {
    const groupTitleContainer = document.createElement("div");
    groupTitleContainer.className = "mb-3";

    const groupTitle = document.createElement("div");
    groupTitle.textContent = group.label;
    groupTitle.className =
      "relative flex items-center justify-between pb-5 text-sm font-semibold text-gray-4 dark:text-dark-6 uppercase cursor-pointer";
    // Add arrow SVG for dropdown
    const arrow = document.createElement("span");
    arrow.innerHTML = `
      <svg
        class="h-7 w-7 transform transition-transform duration-200 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- A simple down arrow path -->
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.439l3.71-3.21a.75.75 0 111.04 1.08l-4.235 3.665a.75.75 0 01-.98 0L5.23 8.27a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
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
      const isOpen = !groupList.classList.contains("hidden");
      groupList.classList.toggle("hidden", isOpen);
      arrow.firstElementChild.classList.toggle("rotate-180", !isOpen);
    });
  });

  return sidebar;
}
