/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // حتماً باید class باشد
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './*.html',
    './*.md',
    './assets/**/*.js', // اگر اسکریپت را در پوشه assets بردی
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}