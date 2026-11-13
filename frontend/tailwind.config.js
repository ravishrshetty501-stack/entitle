/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                // ADIKHAR Brand Design System
                adikhar: {
                    emerald: {
                        DEFAULT: '#07966B',
                        50: '#F0FDF4',
                        100: '#DCFCE7',
                        200: '#BBF7D0',
                        300: '#86EFAC',
                        400: '#4ADE80',
                        500: '#07966B',
                        600: '#057A55',
                        700: '#046C4E',
                        800: '#03543F',
                        900: '#014737',
                        950: '#012920'
                    },
                    navy: {
                        DEFAULT: '#101B30',
                        light: '#1E293B',
                        dark: '#0A1120',
                        deep: '#060B14'
                    },
                    saffron: {
                        DEFAULT: '#F28C28',
                        50: '#FFF7ED',
                        100: '#FFEDD5',
                        200: '#FED7AA',
                        300: '#FDBA74',
                        400: '#FB923C',
                        500: '#F28C28',
                        600: '#EA580C',
                        700: '#C2410C'
                    },
                    ivory: {
                        DEFAULT: '#FBF8F1',
                        warm: '#F7F3E8',
                        soft: '#FCFBF7',
                        card: '#FFFFFF'
                    },
                    border: {
                        DEFAULT: '#E8E3D9',
                        subtle: '#F0EBE1',
                        strong: '#D6CEBE'
                    }
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    subtle: '#FCFBF7',
                    warm: '#FBF8F1',
                    muted: '#F4EFE6'
                },
                midnight: {
                    DEFAULT: '#101B30',
                    light: '#1E293B',
                    soft: '#334155'
                },
                emerald: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    200: '#BBF7D0',
                    300: '#86EFAC',
                    400: '#4ADE80',
                    500: '#07966B',
                    600: '#057A55',
                    700: '#046C4E',
                    800: '#03543F',
                    900: '#014737',
                    950: '#012920'
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' }
                },
                'plane-flight': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '50%': { transform: 'translate(4px, -6px) rotate(3deg)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-slow': 'float-slow 4s ease-in-out infinite',
                'plane-flight': 'plane-flight 3s ease-in-out infinite'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
