// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseHover: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'pulse-hover': 'pulseHover 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
