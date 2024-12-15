/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-webbg': '#F0F6FB',
        'custom-footer-bg': '#E8F0F8',
        'one-bg':'#CBE5FF',

      },
      colors:{
        'custom-color': '#01438A',
        'footer-color': '#006FDE',
        'grd-color': '#002B64'
      },
      backgroundImage: {
        'hero': "url('/images/bg-img.png')",
        // 'sectionone' :"url('/images/slide1.png')", 
      },

           keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 90s linear infinite',
      }

    },
    // container: {
    //   padding: {
    //     default: '20px',
    //     sm: '24px',
    //     md: '32px',
    //   },
    // }
  },
  plugins: [],
}

