/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Nunito: 'Nunito Sans',
            },
            colors: {
                'blue-dark': 'hsl(209, 23%, 22%)',
                'blue-very-dark': 'hsl(207, 26%, 17%)',
                'blue-black': 'hsl(200, 15%, 8%)',
                'gray-dark': 'hsl(0, 0%, 52%)',
                'gray-light': 'hsl(0, 0%, 98%)',
                // white: 'hsl(0, 0%, 100%)',
            },
            gridTemplateColumns: {
                // countries: 'repeat(4, minmax(264px, 328px))',
                // countries: 'repeat(auto-fill, 328px)',
                countries: 'repeat(auto-fill, minmax(250px, 1fr))',
            },
        },
    },
    plugins: [],
}
