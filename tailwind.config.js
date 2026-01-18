/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Core Brand Colors
                "primary": "#6B5B95",          // Deep Purple
                "primary-light": "#E0D7EC",    // Soft Lavender
                "secondary": "#FF8C64",        // Warm Coral/Orange

                // Accent Colors
                "accent-yellow": "#FFD93D",    // Bright Sunny Yellow
                "accent-green": "#88D8B0",     // Minty Green

                // UI & Background Colors
                "background-cream": "#FFFDF5", // Off-white Paper
                "card-light": "#ffffff",       // Pure White
                "card-dark": "#2D2D2D",        // Soft Charcoal for Dark Mode
                "text-dark": "#4A4063",        // Dark Muted Purple (Easier on eyes than black)
                "text-light": "#f1f3f3",       // Off-white text

                // Doodle Palette
                "doodle-purple": "#6B5B95",
                "doodle-teal": "#88D8B0",
                "doodle-orange": "#FF8C64",
                "doodle-yellow": "#FFD93D",
            },
            fontFamily: {
                "display": ["Fredoka", "sans-serif"],
                "body": ["Nunito", "sans-serif"],
                "hand": ["'Gochi Hand'", "cursive"],
            },
            boxShadow: {
                "doodle": "4px 4px 0px 0px rgba(0,0,0,0.1)",
                "doodle-hover": "6px 6px 0px 0px rgba(0,0,0,0.15)",
            }
        },
    },
    plugins: [],
}