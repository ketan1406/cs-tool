import { createSidebar } from "./components/sidebar/index.js";

// Import the case pages (the ones we created earlier):
import {
  createUpperCasePage,
  createLowerCasePage,
  createUpperCamelCasePage,
  createLowerCamelCasePage,
  createSnakeCasePage,
  createKebabCasePage,
  createConstantCasePage,
} from "./components/case/index.js";

// Your existing menu groups
const menuGroups = [
  {
    label: "XML",
    children: [
      { label: "Validator", route: "/xmlvalidator" },
      { label: "Minifier", route: "/xmlminifier" },
      { label: "Formatter", route: "/xmlformatter" },
    ],
  },
  {
    label: "JSON",
    children: [
      { label: "Validator", route: "/jsonvalidator" },
      { label: "Minifier", route: "/jsonminifier" },
      { label: "Formatter", route: "/jsonformatter" },
      { label: "Viewer", route: "/jsonviewer" },
    ],
  },
  {
    label: "Case",
    children: [
      { label: "UPPER CASE", route: "/uppercase" },
      { label: "lower case", route: "/lowercase" },
      { label: "UpperCamelCase", route: "/uppercamelcase" },
      { label: "lowerCamelCase", route: "/lowercamelcase" },
      { label: "snake_case", route: "/snakecase" },
      { label: "kebab-case", route: "/kebabcase" },
      { label: "CONSTANT_CASE", route: "/constantcase" },
    ],
  },
  {
    label: "Others",
    children: [{ label: "QR Code Generator", route: "/qrcodegenerator" }],
  },
  {
    label: "Links",
    children: [{ label: "Contact", route: "/contact" }],
  },
];

/**
 * renderRoute() - Renders the correct "page" component
 * into the #mainContent area based on the current window.location.pathname.
 */
function renderRoute() {
  const path = window.location.pathname; // e.g. "/uppercase"
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = ""; // clear old content

  // For demonstration, we just switch on path:
  switch (path) {
    // -- CASE ROUTES --
    case "/uppercase":
      mainContent.appendChild(createUpperCasePage());
      break;
    case "/lowercase":
      mainContent.appendChild(createLowerCasePage());
      break;
    case "/uppercamelcase":
      mainContent.appendChild(createUpperCamelCasePage());
      break;
    case "/lowercamelcase":
      mainContent.appendChild(createLowerCamelCasePage());
      break;
    case "/snakecase":
      mainContent.appendChild(createSnakeCasePage());
      break;
    case "/kebabcase":
      mainContent.appendChild(createKebabCasePage());
      break;
    case "/constantcase":
      mainContent.appendChild(createConstantCasePage());
      break;

    // -- XML ROUTES (Placeholder) --
    case "/xmlvalidator":
    case "/xmlminifier":
    case "/xmlformatter":
      mainContent.textContent = `Placeholder for ${path}`;
      break;

    // -- JSON ROUTES (Placeholder) --
    case "/jsonvalidator":
    case "/jsonminifier":
    case "/jsonformatter":
    case "/jsonviewer":
      mainContent.textContent = `Placeholder for ${path}`;
      break;

    // -- Others (Placeholder) --
    case "/qrcodegenerator":
      mainContent.textContent = `Placeholder for QR Code Generator page.`;
      break;

    // -- Links (Placeholder) --
    case "/contact":
      mainContent.textContent = `Placeholder for Contact page.`;
      break;

    default:
      // If we don't recognize the route, or "/"
      mainContent.textContent =
        "Welcome to CS Tool! Pick a tool from the sidebar.";
  }
}

/**
 * initSPA() - Converts all sidebar <a> links into single-page-app (SPA) navigation
 * by preventing the default browser navigation and using `history.pushState`.
 */
function initSPA() {
  const sidebarLinks = document.querySelectorAll("aside a"); // or more targeted
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("href");
      window.history.pushState({}, "", route); // update URL, no page reload
      renderRoute(); // re-render
    });
  });

  // Handle back/forward buttons
  window.addEventListener("popstate", () => {
    renderRoute();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Make #app a flex container that fills the screen (assuming your index.html
  // sets <html> and <body> to h-full, etc).
  // For example: <div id="app" class="flex h-screen"></div>

  // 1) Create & append the sidebar
  const sidebar = createSidebar(menuGroups);
  app.appendChild(sidebar);

  // 2) Create main content area to the right of the sidebar
  const mainContent = document.createElement("div");
  mainContent.id = "mainContent";
  mainContent.className =
    "flex-1 p-6 overflow-auto text-gray-7 dark:text-dark-6";
  // .flex-1 so it occupies remaining space
  // .p-6 for spacing
  // .overflow-auto if you want it scrollable
  app.appendChild(mainContent);

  // 3) Initialize SPA routing
  initSPA();

  // 4) Render the current route (or default page)
  renderRoute();
});
