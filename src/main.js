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

import {
  createJSONValidator,
  createJSONMinifier,
  createJSONFormatter,
  createJSONViewer,
} from "./components/format/json/index.js";

// Your existing menu groups
const menuGroups = [
  {
    label: "XML",
    children: [
      { label: "Validator", route: "/xml/validator" },
      { label: "Minifier", route: "/xml/minifier" },
      { label: "Formatter", route: "/xml/formatter" },
    ],
  },
  {
    label: "JSON",
    children: [
      { label: "Validator", route: "/json/validator" },
      { label: "Minifier", route: "/json/minifier" },
      { label: "Formatter", route: "/json/formatter" },
      { label: "Viewer", route: "/json/viewer" },
    ],
  },
  {
    label: "Case",
    children: [
      { label: "UPPER CASE", route: "/case/uppercase" },
      { label: "lower case", route: "/case/lowercase" },
      { label: "UpperCamelCase", route: "/case/uppercamelcase" },
      { label: "lowerCamelCase", route: "/case/lowercamelcase" },
      { label: "snake_case", route: "/case/snakecase" },
      { label: "kebab-case", route: "/case/kebabcase" },
      { label: "CONSTANT_CASE", route: "/case/constantcase" },
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
  const rawHash = window.location.hash; // e.g. "#/case/uppercase"
  const pathQuery = rawHash.replace(/^#/, ""); // e.g. "/case/uppercase"

  // Split on the first "?" to separate path from query
  const [routePath, queryString = ""] = pathQuery.split("?");
  // Parse query params, if any
  const params = new URLSearchParams(queryString);

  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = ""; // clear old content

  // For demonstration, we just switch on path:
  switch (routePath) {
    // -- CASE ROUTES --
    case "/case/uppercase": {
      const page = createUpperCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/lowercase": {
      const page = createLowerCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/uppercamelcase": {
      const page = createUpperCamelCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/lowercamelcase": {
      const page = createLowerCamelCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/snakecase": {
      const page = createSnakeCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/kebabcase": {
      const page = createKebabCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    case "/case/constantcase": {
      const page = createConstantCasePage();
      mainContent.appendChild(page);

      // If ?text=someValue, fill the textarea
      const text = params.get("text") || "";
      if (text) {
        const inputArea = page.querySelector("textarea");
        if (inputArea) {
          inputArea.value = text;
        }
      }
      break;
    }
    // -- XML ROUTES (Placeholder) --
    case "/xml/validator":
    case "/xml/minifier":
    case "/xml/formatter":
      mainContent.textContent = `Placeholder for ${path}`;
      break;

    // -- JSON ROUTES (Placeholder) --
    case "/json/validator":
      mainContent.appendChild(createJSONValidator());
      break;
    case "/json/minifier":
      mainContent.appendChild(createJSONMinifier());
      break;
    case "/json/formatter":
      mainContent.appendChild(createJSONFormatter());
      break;
    case "/json/viewer":
      mainContent.appendChild(createJSONViewer());
      break;
    case "/xml/validator":
      mainContent.appendChild(createXMLValidator());
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
      window.location.hash = route;
      renderRoute(); // re-render
    });
  });

  // Handle back/forward buttons
  window.addEventListener("hashchange", () => {
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
    "flex-1 p-2 overflow-auto bg-gray-100 dark:bg-dark-4 no-scrollbar";
  // .flex-1 so it occupies remaining space
  // .p-6 for spacing
  // .overflow-auto if you want it scrollable
  app.appendChild(mainContent);

  // 3) Initialize SPA routing
  initSPA();

  // 4) Render the current route (or default page)
  renderRoute();
});
