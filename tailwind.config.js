/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      screens: {
        sm: { 'min': '480px' },
        md: { 'min': '768px', },
        lg: { 'min': '1024px' },
        xl: { 'min': '1440px' },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        hind: ['Hind Siliguri', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        podkova: ['Podkova', 'serif'],
      },
      colors: {
        "primary": '#0D47A1',
        "secondary": '#1976D2',
        "third": '#9BC7F3',
        "fourth": '#FDFFE2',
        "fifth": '#0D3D6E',
        "dark1": '#0f172a',
        "dark2": '#B9D6F2',
        "dark3": '#2C2C2E',
        grad1: 'rgb(13,71,161)',
        grad2: 'rgb(66,165,245)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, rgba(13,71,161,1) 0%, rgba(66,165,245,1) 99%)',
        'secondary-gradient': 'linear-gradient(86deg, rgba(13,71,161,1) 60%, rgba(66,165,245,1) 85%)',
      },
      boxShadow: {
        'BS': '7px 7px 5px #125393,7px -7px 5px #2199ff;',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}