import { createSidebar } from "./components/sidebar/index.js";

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

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const sidebar = createSidebar(menuGroups);
  app.appendChild(sidebar);
});
