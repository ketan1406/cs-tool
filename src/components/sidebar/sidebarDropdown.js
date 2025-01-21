export function createSidebarDropdown(items) {
  const dropdown = document.createElement("ul");
  dropdown.className = "sidebar-dropdown";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "dropdown-item";

    const link = document.createElement("a");
    link.href = item.route;
    link.textContent = item.label;

    li.appendChild(link);
    dropdown.appendChild(li);
  });

  return dropdown;
}
