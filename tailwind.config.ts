const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#edeff8',
                    100: '#d2d9e6',
                    200: '#b8bfd0',
                    300: '#9da6bb',
                    400: '#8892aa',
                    500: '#737f9a',
                    600: '#647088',
                    700: '#535c71',
                    800: '#424a5b',
                    900: '#2f3543',
                },
                secondary: {
                    50: '#fff9e7',
                    100: '#fbf2e1',
                    200: '#f3ead8',
                    300: '#e3dbc9',
                    400: '#bfb7a6',
                    500: '#9f9888',
                    600: '#766f60',
                    700: '#625c4d',
                    800: '#433d2f',
                    900: '#221d0f',
                },
                tertiary: {
                    50: '#ecedee',
                    100: '#cdd4d6',
                    200: '#abb8bc',
                    300: '#889da2',
                    400: '#6f888e',
                    500: '#55747b',
                    600: '#4a656b',
                    700: '#3c5257',
                    800: '#2f3f43',
                    900: '#1f2a2d',
                },
                accent: {
                    50: '#fffaff',
                    100: '#fbf5ff',
                    200: '#f6f0ff',
                    300: '#f1ebff',
                    400: '#d4cee7',
                    500: '#b7b1ca',
                    600: '#8c869e',
                    700: '#777188',
                    800: '#565267',
                    900: '#332f43',
                }
            }
        }
    }
}