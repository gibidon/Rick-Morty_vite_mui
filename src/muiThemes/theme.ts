import { createTheme } from '@mui/material'
import { deepOrange, yellow, blue, red } from '@mui/material/colors'

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          padding: '12px 8px',
          borderRadius: '6px',
          backgroundColor: deepOrange[400],
          textTransform: 'none',
          fontSize: '1rem',
          color: 'white',
          fontWeight: 600,
          '&:hover': { backgroundColor: deepOrange[600] },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: '12 8px',
          backgroundColor: 'lightgray',
          borderRadius: '8px',
        },
      },
    },
  },
  palette: {
    background: {
      paper: '#fff',
    },

    // text: {
    //   primary: '#173A5E',
    //   secondary: '#46505A',
    // },

    secondary: { main: blue[500], dark: blue[700] },
    error: { main: red[500], dark: red[700] },
  },
})
