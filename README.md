# CS Tool ⚙️

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-green?style=for-the-badge&logo=github)](https://ketan1406.github.io/cs-tool/)

A versatile web-based utility tool featuring a collapsible sidebar, dark mode toggle, and a suite of text format/conversion features—all bundled with Vite and Tailwind CSS for quick development and deployment.

## ✨ Key Features

- **Dark Mode Toggle** – Easily switch between light and dark themes.
- **Collapsible Sidebar** – Organized menu of tools such as XML/JSON utilities and text case converters.
- **Text Converters** – Convert strings to UPPERCASE, lowercase, snake_case, kebab-case, constant case, etc.
- **Client-Side Routing** – Single-page app (SPA) navigation without full page reloads.
- **Lightweight & Fast** – Powered by [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) for performance.

## 🚀 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/cs-tool.git
   ```

2. **Install dependencies**:

   ```bash
   cd cs-tool && npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

## 💡 Technologies Used

- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Vite](https://vite.dev/) - Build tool & dev server.
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Automated deployment to GitHub Pages.
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - For persisting dark/light mode preference.

## 📂 Project Structure

    cs-tool/
    ├── README.md
    ├── index.html            # Entry point of the app
    ├── package.json          # Project dependencies & scripts
    ├── postcss.config.js
    ├── public/
    │   └── assets/           # Images/icons (e.g., icon-moon.png, icon-sun.png)
    ├── src/
    │   ├── components/
    │   │   ├── case/         # All case converter pages (upperCase.js, etc.)
    │   │   ├── format/       # Additional text/format utilities
    │   │   └── sidebar/      # Dark mode toggle & sidebar logic
    │   ├── main.js           # SPA routing, sidebar creation
    │   └── style.css         # Tailwind base/style imports
    ├── tailwind.config.js
    └── vite.config.js        # Build configuration

## 📜 License

Distributed under MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Tailwind CSS & Vite – Huge thanks to their communities for making rapid prototyping a breeze.
- Icons – Moon & Sun icons originally sourced from icons8.
- Local Storage Inspiration – Official MDN Web Docs.
- SPA Navigation Approach – Influenced by various open-source router patterns and GitHub Pages setups.

## ⚡ Performance

[![Lighthouse](https://img.shields.io/badge/Lighthouse-98-green?logo=lighthouse&style=flat)](https://pagespeed.web.dev/)
