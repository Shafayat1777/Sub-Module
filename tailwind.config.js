import tailwindAnimate from 'tailwindcss-animate';

import { colors } from './config/tailwind';

/** @type {import('tailwindcss').Config} */

export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: '8px',
				md: '6px',
				sm: '4px',
			},
			colors: {
				background: colors.BACKGROUND,
				foreground: colors.FOREGROUND,
				card: {
					DEFAULT: colors.CARD,
					foreground: colors.CARD_FOREGROUND,
				},
				popover: {
					DEFAULT: colors.POPOVER,
					foreground: colors.POPOVER_FOREGROUND,
				},
				primary: {
					DEFAULT: colors.PRIMARY,
					foreground: colors.PRIMARY_FOREGROUND,
				},
				secondary: {
					DEFAULT: colors.SECONDARY,
					foreground: colors.SECONDARY_FOREGROUND,
					light: colors.SECONDARY_LIGHT,
				},
				muted: {
					DEFAULT: colors.MUTED,
					foreground: colors.MUTED_FOREGROUND,
				},
				accent: {
					DEFAULT: colors.ACCENT,
					foreground: colors.ACCENT_FOREGROUND,
				},
				destructive: {
					DEFAULT: colors.DESTRUCTIVE,
					foreground: colors.DESTRUCTIVE_FOREGROUND,
				},
				success: {
					DEFAULT: colors.SUCCESS,
					foreground: colors.SUCCESS_FOREGROUND,
				},
				warning: {
					DEFAULT: colors.WARNING,
					foreground: colors.WARNING_FOREGROUND,
				},
				base: {
					150: colors.BASE_150,
					200: colors.BASE_200,
					300: colors.BASE_300,
					DEFAULT: colors.BASE_100,
					content: colors.BASE_CONTENT,
				},
				border: colors.BORDER,
				input: colors.INPUT,
				ring: colors.RING,
				chart: {
					1: colors.CHART_1,
					2: colors.CHART_2,
					3: colors.CHART_3,
					4: colors.CHART_4,
					5: colors.CHART_5,
				},
			},
			keyframes: {
				shine: {
					from: {
						backgroundPosition: '200% 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
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
			},
			aspectRatio: {
				passport: '531/650',
			},
			animation: {
				shine: 'shine 8s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [tailwindAnimate],
};
