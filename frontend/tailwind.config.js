/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5f7f9',
                    100: '#e1e5eb',
                    200: '#c5ced8',
                    300: '#9babc8',
                    400: '#6b82a7',
                    500: '#486386',
                    600: '#344b68',
                    700: '#2a3c54',
                    800: '#253448',
                    900: '#232d3d',
                    950: '#161c28',
                },
                accent: {
                    DEFAULT: '#b58e5a', // A sophisticated elegant gold/bronze for high-end feel
                    hover: '#9a784c',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            }
        },
    },
    plugins: [],
}
