const colors = require('tailwindcss/colors');

const gray = {
    50: 'hsl(216, 33%, 97%)',
    100: 'hsl(100, 100%, 100%)',
    200: 'hsl(0, 1%, 100%)',
    300: 'hsl(0, 1%, 100%)',
    400: 'hsl(0, 1%, 100%)',
    500: 'hsl(0, 1%, 100%)',
    600: 'hsl(238, 96%, 74%)',
    700: 'hsl(238, 96%, 74%)',
    800: 'hsl(249, 100%, 91%)',
    900: 'hsl(238, 96%, 74%)',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
