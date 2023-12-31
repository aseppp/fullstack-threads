import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      'heading1-bold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading1-semibold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'heading2-bold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading2-semibold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'heading3-bold': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading4-medium': [
        '20px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'body-semibold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'body-medium': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-normal': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'body1-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'base-regular': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'base-medium': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'base-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'base1-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'small-regular': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'small-medium': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'small-semibold': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'subtle-medium': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      'subtle-semibold': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '600',
        },
      ],
      'tiny-medium': [
        '10px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'x-small-semibold': [
        '7px',
        {
          lineHeight: '9.318px',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      colors: {
        'primary-green': '#43ff88',
        'dark-1': '#1d1d1d',
        'dark-2': '#303030',
        'dark-3': '#535353',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'gray-1': '#697C89',
        blue: '#0095F6',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
      screens: {
        xs: '400px',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
