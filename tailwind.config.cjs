/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        "chat-light-purple": "#EEDCFF",
        "chat-light-green": "#D2F2EA",
        "sticker-light-gray": "#E9F3FF",
        "sticker-light-salmon": "#FDCFA4",
        "sticker-light-golden": "#F9E9C3",
        "sticker-pale-turquoise": "#F9E9C3",
        "sticker-light-green": "#CBF1C2",
        "sticker-lavender": "#CFCEF9",
        "sticker-light-thistle": "#F9E0FD",
      }
    },
  },
  plugins: [],
}
