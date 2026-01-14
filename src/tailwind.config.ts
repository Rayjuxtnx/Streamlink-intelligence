
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        'accent-neon': '#98FF98',
        'accent-blue': 'hsl(217, 91%, 60%)',
        'accent-yellow': 'hsl(48, 100%, 50%)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'blob-one': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-70%, -40%) scale(1.2)' },
          '50%': { transform: 'translate(-40%, -70%) scale(1)' },
          '75%': { transform: 'translate(-60%, -55%) scale(1.1)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
        'blob-two': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-30%, -60%) scale(0.9)' },
          '50%': { transform: 'translate(-65%, -35%) scale(1.1)' },
          '75%': { transform: 'translate(-40%, -65%) scale(1)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
        'blob-three': {
          '0%': { transform: 'translate(-20%, -60%) scale(1)' },
          '25%': { transform: 'translate(20%, -40%) scale(1.2)' },
          '50%': { transform: 'translate(40%, 20%) scale(1)' },
          '75%': { transform: 'translate(0%, 30%) scale(0.8)' },
          '100%': { transform: 'translate(-20%, -60%) scale(1)' },
        },
        'blob-four': {
          '0%': { transform: 'translate(50%, 40%) scale(1)' },
          '25%': { transform: 'translate(10%, -20%) scale(0.8)' },
          '50%': { transform: 'translate(-30%, 10%) scale(1.1)' },
          '75%': { transform: 'translate(20%, 50%) scale(1.2)' },
          '100%': { transform: 'translate(50%, 40%) scale(1)' },
        },
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow': {
          '0%, 100%': {
            textShadow:
              '0 0 5px hsl(var(--primary) / 0.5), 0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.5)',
            transform: 'scale(1)',
          },
          '50%': {
            textShadow:
              '0 0 10px hsl(var(--primary) / 0.7), 0 0 20px hsl(var(--primary) / 0.7), 0 0 40px hsl(var(--primary) / 0.7)',
            transform: 'scale(1.01)',
          },
        },
        'glow-subtle': {
          '0%, 100%': {
            textShadow: '0 0 2px hsl(var(--primary-foreground) / 0.3)',
            transform: 'translateY(0)',
          },
          '50%': {
            textShadow: '0 0 5px hsl(var(--primary-foreground) / 0.5)',
            transform: 'translateY(-1px)',
          },
        },
        'preloader-pulse-outer': {
            '0%, 100%': { transform: 'scale(0.8)', opacity: '0.5' },
            '50%': { transform: 'scale(1.1)', opacity: '0.2' },
        },
        'preloader-pulse-inner': {
            '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
            '50%': { transform: 'scale(0.9)', opacity: '0.7' },
        },
        'text-gradient': {
            'to': {
                'background-position': '200% center',
            },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'blob-one': 'blob-one 20s infinite ease-in-out',
        'blob-two': 'blob-two 25s infinite ease-in-out',
        'blob-three': 'blob-three 18s infinite ease-in-out',
        'blob-four': 'blob-four 22s infinite ease-in-out',
        'gradient-animation': 'gradient-animation 10s ease infinite',
        'glow': 'glow 6s ease-in-out infinite',
        'glow-subtle': 'glow-subtle 8s ease-in-out infinite',
        'preloader-pulse-outer': 'preloader-pulse-outer 3s infinite ease-in-out',
        'preloader-pulse-inner': 'preloader-pulse-inner 3s infinite ease-in-out -1.5s',
        'text-gradient': 'text-gradient 4s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
