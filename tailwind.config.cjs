/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1920px',
      'laptop': '1420px'
    },
    extend: {
      colors: {
        "primary-royal-blue": "#2F80ED",
        "primary-gray": "#4F4F4F",
        "primary-gray-2": "#828282",
        "primary-gray-3": "#E0E0E0",
        "indicator-orange": "#F8B76B",
        "indicator-slate-blue": "#8785FF",
        "indicator-indian-red": "#EB5757",
        "indicator-gold": "#F2C94C",
        "chat-light-orange": "#FCEED3",
        "chat-deep-orange": "#E5A443",
        "chat-light-purple": "#EEDCFF",
        "chat-deep-purple": "#9B51E0",
        "chat-light-green": "#D2F2EA",
        "sticker-light-gray": "#E9F3FF",
        "sticker-light-salmon": "#FDCFA4",
        "sticker-light-golden": "#F9E9C3",
        "sticker-pale-turquoise": "#F9E9C3",
        "sticker-light-green": "#CBF1C2",
        "sticker-lavender": "#CFCEF9",
        "sticker-light-thistle": "#F9E0FD",
        "subgray": "#BDBDBD"
      }
    },
  },
  plugins: [],
}
