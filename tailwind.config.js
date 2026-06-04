module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#333333',
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'saber-pulse': 'saberPulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        saberPulse: {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 8px #f97316, 0 0 20px #f9731640' },
          '50%': { opacity: '1', boxShadow: '0 0 16px #f97316, 0 0 40px #f9731660' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #f9731640' },
          '50%': { textShadow: '0 0 20px #f9731680, 0 0 40px #f9731630' },
        }
      }
    },
  },
  plugins: [],
}
