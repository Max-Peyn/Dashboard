/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        mainBack: 'var(--color-mainBack)',
        sectionBack: 'var(--color-sectionBack)',
        mainBlue: 'var(--color-mainBlue)',
        mainText: 'var(--color-mainText)',
        mainGrey: 'var(--color-mainGrey)',
        borderGrey: 'var(--color-borderGrey)',
        greyText: 'var(--color-greyText)',
        greyText2: 'var(--color-greyText2)',
        greenText: 'var(--color-greenText)',
        redText: 'var(--color-redText)',
        asideBtn:'var(--color-asideBtn)',
        greyBtn:'var(--color-greyBtn)',
        inputBack:'var(--color-inputBack)',
        billingBtn:'var(--color-billingBtn)',
        tableHead:'var(--color-tableHead)',
      },
      screens: {
        '2xl': '1440px',
        'xl' : '1200px',
        'lg' : '992px',
        'md' : '768px',
        'sm' : '480px',
        'lsm': '400px',
        'xs' : '320px',
      },
    },
  },
  plugins: [],
}

