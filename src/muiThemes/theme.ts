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
          padding: '12px 8px',
          borderRadius: '4px',
          backgroundColor: 'white',
          fontWeight: 600,
        },
      },
    },
  },
  palette: {
    background: {
      paper: '#fff',
    },
    secondary: { main: deepOrange[500], dark: deepOrange[700] },
    error: { main: red[500], dark: red[700] },
  },
})
