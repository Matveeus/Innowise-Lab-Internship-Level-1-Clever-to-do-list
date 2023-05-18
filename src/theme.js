import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#7b1fa2',
    },
    dayBorder: '#FFFFFF',
    formBorder: '#FFFFFF',
    today: '#357a38',
    task: {
      done: '#8bc34a',
      todo: '#ff3d00',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#3f51b5',
    },
    dayBorder: '#000000',
    formBorder: '#000000',
    today: '#357a38',
    task: {
      done: '#8bc34a',
      todo: '#ff3d00',
    },
  },
});

export { lightTheme, darkTheme };
