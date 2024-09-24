module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#1A1A1A',
        'dark-primary': '#00AFFF',
        'dark-secondary': '#9B51E0',
        'dark-text': '#E0E0E0',
        'dark-text-secondary': '#B3B3B3',
        'dark-highlight': '#00FFC6',
        
        // Light theme colors
        'light-bg': '#F9F9F9',
        'light-primary': '#007ACC',
        'light-secondary': '#6C5CE7',
        'light-text': '#333333',
        'light-text-secondary': '#666666',
        'light-highlight': '#17E9E0',
        
        // Unified colors
        'cta': '#FF007A',
        'icon': '#00FFF5',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}