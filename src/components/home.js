export function createHomePage() {
  const container = document.createElement("div");
  container.className = "w-full h-full bg-gray-100 dark:bg-dark-4";

  // Fixed Header Section - Align with sidebar width
  const header = document.createElement("div");
  header.className =
    "fixed top-0 left-[288px] right-0 h-28 bg-gray-100 dark:bg-dark-4 z-50 shadow-md flex items-center"; // 288px = 72px sidebar * 4

  // Header content container (aligned right)
  const headerContent = document.createElement("div");
  headerContent.className =
    "max-w-6xl mx-auto pr-6 flex items-center gap-6 mr-auto";

  // Icon
  const icon = document.createElement("img");
  icon.src = "./assets/icon-tools2.png";
  icon.className = "h-20 w-20";
  icon.alt = "Tools Icon";

  // Text Container - Right aligned
  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-start"; // Changed to right alignment

  // Title
  const title = document.createElement("h1");
  title.className =
    "text-4xl font-bold text-gray-7 dark:text-dark-6 mb-1 text-left";
  title.textContent = "Online Tools";

  // Subtitle
  const subtitle = document.createElement("p");
  subtitle.className = "text-lg text-gray-5 dark:text-dark-3 text-left";
  subtitle.textContent =
    "A collection of utilities for formatting, converting, and encoding data";

  // Assemble Header
  headerContent.appendChild(icon);
  textContainer.appendChild(title);
  textContainer.appendChild(subtitle);
  headerContent.appendChild(textContainer);
  header.appendChild(headerContent);
  container.appendChild(header);

  // Tools Grid
  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 pt-40"; // Increased top padding

  // Format Section
  const formatSection = createToolSection({
    title: "Format",
    items: [
      {
        title: "JSON",
        tools: [
          { name: "Validator", route: "/json/validator" },
          { name: "Minifier", route: "/json/minifier" },
          { name: "Formatter", route: "/json/formatter" },
          { name: "Viewer", route: "/json/viewer" },
        ],
      },
      {
        title: "XML",
        tools: [
          { name: "Validator", route: "/xml/validator" },
          { name: "Minifier", route: "/xml/minifier" },
          { name: "Formatter", route: "/xml/formatter" },
        ],
      },
    ],
  });

  // Convert Section
  const convertSection = createToolSection({
    title: "Convert",
    items: [
      {
        title: "Text Case",
        tools: [
          { name: "lower case", route: "/case/lowercase" },
          { name: "UPPER CASE", route: "/case/uppercase" },
          { name: "lowerCamelCase", route: "/case/lowercamelcase" },
          { name: "UpperCamelCase", route: "/case/uppercamelcase" },
          { name: "snake_case", route: "/case/snakecase" },
          { name: "kebab-case", route: "/case/kebabcase" },
          { name: "CONSTANT_CASE", route: "/case/constantcase" },
        ],
      },
    ],
  });

  // More Sections can be added here...

  grid.appendChild(formatSection);
  grid.appendChild(convertSection);
  container.appendChild(grid);

  return container;
}

function createToolSection({ title, items }) {
  const section = document.createElement("div");
  section.className = "bg-white dark:bg-dark-2 rounded-lg shadow-md p-6";

  const titleElement = document.createElement("h2");
  titleElement.className =
    "text-xl font-semibold text-gray-7 dark:text-dark-6 mb-4";
  titleElement.textContent = title;
  section.appendChild(titleElement);

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "mb-4 last:mb-0";

    const cardTitle = document.createElement("h3");
    cardTitle.className =
      "text-lg font-medium text-gray-6 dark:text-dark-5 mb-2";
    cardTitle.textContent = item.title;
    card.appendChild(cardTitle);

    const toolsList = document.createElement("div");
    toolsList.className = "space-y-2";

    item.tools.forEach((tool) => {
      const toolLink = document.createElement("a");
      toolLink.href = `#${tool.route}`;
      toolLink.className =
        "block p-3 rounded-md bg-gray-50 dark:bg-dark-3 hover:bg-gray-100 dark:hover:bg-dark-4 text-gray-7 dark:text-dark-6 transition-colors";
      toolLink.textContent = tool.name;

      toolsList.appendChild(toolLink);
    });

    card.appendChild(toolsList);
    section.appendChild(card);
  });

  return section;
}
