/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

import daisyui from "daisyui";

export default {
  //darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        custom: "1177px",
        custom2: "300px"
      },
    },
    fontFamily: {
      sans: ["JetBrains Mono", "sans-serif"],
    },
  },
  plugins: [daisyui, flowbite],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate"],
  },
};
