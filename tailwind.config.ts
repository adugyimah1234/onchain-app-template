import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
        center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }, 
      extend: {    
      colors: {
          'twitter-dark': '#22202B',
          'twitter-darker': '#292734',
        },
      },
    },
  },
  plugins: [],
};

export default config;
