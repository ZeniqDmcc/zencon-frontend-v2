const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ["Open Sans"],
      'secondary': ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'Hanson': ['hanson', 'sans-serif'],
      'HeronSans': ['heronSans', 'sans-serif'],
      'HeronSansCond': ['herosanscond', 'sans-serif'],
    },
    screens: {
      "xs": "400px",
      // 'smol': {'max': '850px'},
      '800px': {'max': '800px'},
      'smol': {'max': '1170px'},
      '1600px': {'max': '1600px'},
      'laptop': {'max':'1468px'},
      '640px': {'max':'640px'},
      'mobile': {'max':'480px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-btn": "#FFDC80",
        "footerBg": "#0A1717",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'heroBg': "url('./public/assets/projects_hero_bg.png')"
      },
      aspectRatio: {
        '1.1/1': '1.1 / 1'
      },
      zIndex: {
        'behind': '-1',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-image': {
          'background-image': "url('./assets/zencon-home-bg.jpg')",
        },
        '.rio023': {
          'background-image': "url('./assets/map.svg')",
          'background-position-x': "center",
        }
      })
    }
  ],
};
