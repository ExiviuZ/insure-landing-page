/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-header": "repeat(auto-fit, minmax(350px, 1fr))",
      },
      colors: {
        "app-primary-dark-violet": "hsl(256, 26%, 20%)",
        "app-primary-grayish-blue": "hsl(216, 30%, 68%)",
        "app-neutral-very-dark-violet": "hsl(270, 9%, 17%)",
        "app-neutral-dark-grayish-violet": "hsl(273, 4%, 51%)",
        "app-neutral-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "how-pattern-mobile": "url('images/bg-pattern-how-we-work-mobile.svg')",
        "how-pattern-desktop":
          "url('images/bg-pattern-how-we-work-desktop.svg')",
        "footer-pattern-mobile": "url('images/bg-pattern-footer-mobile.svg')",
        "footer-pattern-desktop": "url('images/bg-pattern-footer-desktop.svg')",

        "intro-left-pattern-mobile":
          "url('images/bg-pattern-intro-left-mobile.svg')",
        "intro-left-pattern-desktop":
          "url('images/bg-pattern-intro-left-desktop.svg')",

        "intro-right-pattern-mobile":
          "url('images/bg-pattern-intro-right-mobile.svg')",
        "intro-right-pattern-desktop":
          "url('images/bg-pattern-intro-right-desktop.svg')",
        "nav-pattern": "url('images/bg-pattern-mobile-nav.svg')",
      },
    },
  },
  plugins: [],
};
