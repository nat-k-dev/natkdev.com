/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-turquoise": "#dff6f580",
        "white-turquoise": "#F8FEFE",
        "soft-mint-blue": "#b5eaea4d",
        "slightly-lighter-grey": "#444444",
        "charcoal-grey": "#2E2E2E",
        "muted-coral": "#F6C6B5",
        
        
        "home-background-color": "#b5eaea4d",
        "home-text-color": "#2E2E2E",
        "home-inverted-background-color": "#F8FEFE",
        "home-inverted-text-color": "#444444",
        "header-background-color": "#fff",
        "header-text-color": "#444444",
      },
      boxShadow: {

      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

