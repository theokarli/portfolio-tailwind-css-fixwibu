module.exports = {
  content: ['index.html'], // lokasi tempat file html/js yang akan kita pakaikan tailwindCSS atau kek file web kita ada dimana gitu. ./index.html artinya file dgn nama index.html yang ada di dalam folder tmpt file tailwind ini berada akan di cek oleh tailwindCSS.
  darkMode: 'class', // darkMode: 'class' artinya kita akan menggunakan class untuk mengaktifkan darkMode.
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
