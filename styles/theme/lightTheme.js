import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#0e0e10' },
        primary: { main: '#772de7' },
        text: {
            primary: '#eee'
        }
    },
    typography: {
        fontFamily: [
            'Lato', 'sans-serif',
        ].join(','),
    },
})

export default lightTheme;