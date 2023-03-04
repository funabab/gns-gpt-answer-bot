/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;',
      },
    },
  },
  plugins: [],
}
