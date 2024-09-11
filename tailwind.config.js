// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes your component files
    "node_modules/daisyui/dist/**/*.js", // Include DaisyUI in your content
  ],
  plugins: [daisyui],
};
