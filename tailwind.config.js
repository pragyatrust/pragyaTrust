/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ochre: {
          50: '#FEF7E6',
          100: '#FDECC0',
          200: '#FBD896',
          300: '#F9C46C',
          400: '#F7B042',
          500: '#E85E00', // Primary ochre - your specified color
          600: '#D15500',
          700: '#BA4C00',
          800: '#A34300',
          900: '#8C3A00',
        },
        navy: {
          50: '#E6F0FF',
          100: '#B3D1FF',
          200: '#80B2FF',
          300: '#4D93FF',
          400: '#1A74FF',
          500: '#0B2545', // Primary navy
          600: '#0A213D',
          700: '#091D35',
          800: '#08192D',
          900: '#071525',
        },
        gray: {
          50: '#FAFAF7', // Section background
          100: '#F5F5F2',
          200: '#E5E5E0',
          300: '#D4D4CE',
          400: '#A3A3A3',
          500: '#737373',
          600: '#6B7280', // Muted text
          700: '#525252',
          800: '#404040',
          900: '#1F2937', // Body text
        }
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }], // 44px
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '600' }], // 32px
        'h3': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 24px
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'small': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}