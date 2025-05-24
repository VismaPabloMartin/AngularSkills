/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',      // Azul profesional
        secondary: '#64748b',    // Gris slate
        accent: '#10b981',       // Verde para CTAs
        dark: '#1e293b',         // Texto principal
        light: '#f8fafc',        // Fondo claro
      },
      fontFamily: {
        heading: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', 'Roboto', 'sans-serif'],
        code: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px',
        'large': '1280px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb, #3b82f6)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
