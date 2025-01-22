export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        // Custom colors for your project
        primary: {
          DEFAULT: "#3C50E0", // Replace with your desired primary color
          light: "#5561F3",
          dark: "#2A3BB3",
        },
        dark: {
          DEFAULT: "#1A202C", // Default dark background
          2: "#2D3748", // Slightly lighter dark mode color
          3: "#4A5568", // Used for text
          4: "#1C2538", // Main content bg
          5: "#727b87",
          6: "#A0AEC0", // Muted text
        },
        gray: {
          DEFAULT: "#F7FAFC", // Light background
          2: "#EDF2F7", // Light gray for hover
          3: "#E2E8F0", // Borders
          4: "#6885A3", // Subtle text
          5: "#718096", // Muted text
          6: "#A0AEC0", // Disabled text
          7: "#030729", // slider bg
        },
      },
    },
  },
  plugins: [],
};
