import { createSidebar } from "./components/sidebar/index.js";

const menuGroups = [
  {
    label: "Hashing",
    children: [
      { label: "MD5", route: "/md5" },
      { label: "SHA1", route: "/sha1" },
    ],
  },
  {
    label: "Encryption",
    children: [
      { label: "AES", route: "/aes" },
      { label: "RSA", route: "/rsa" },
    ],
  },
  {
    label: "Utilities",
    children: [
      { label: "Uppercase Converter", route: "/uppercase" },
      { label: "Lowercase Converter", route: "/lowercase" },
    ],
  },
];

// Initialize the Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app"); // Ensure you have a root div with id="app"
  const sidebar = createSidebar(menuGroups);

  app.appendChild(sidebar);
});
