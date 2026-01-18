/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "cream": "#FDFBF7",
                "cream-dark": "#F2F0E9",
                "doodle-purple": "#6A67CE",
                "doodle-teal": "#4ECDC4",
                "doodle-red": "#FF6B6B",
                "charcoal": "#4A4A4A",
                "ink": "#2D3436",
                "paper-line": "#DADADA",
            },
            fontFamily: {
                "display": ["Fredoka", "sans-serif"],
                "hand": ["Patrick Hand", "cursive"],
            },
            boxShadow: {
                "doodle": "4px 4px 0px 0px rgba(0,0,0,0.1)",
                "doodle-hover": "6px 6px 0px 0px rgba(0,0,0,0.15)",
            }
        },
    },
    plugins: [],
}