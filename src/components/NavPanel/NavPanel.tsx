import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Box } from '@mui/material'
import { theme } from '../../muiThemes/theme'
import * as styles from './navPanel.module.scss'

export const NavPanel = () => {
  const auth = useAuth()

  return (
    <>
      <Box
        sx={{
          fontSize: '52px',
          fontFamily: 'WubbaLubbaDubDub',
          display: 'flex',
          justifyContent: 'center',
          '&:hover': { color: theme.palette.secondary.dark },
        }}
      >
        <Link to="/">Rick & Morty</Link>
      </Box>
      <nav className={styles.navbar}>
        <div className={styles.greeting}>
          {auth.user === null ? 'You are not logged in' : `Hello,${auth.user}`}
        </div>

        <ul className={styles.panel}>
          <li>
            <NavLink to="/login">Login page</NavLink>
          </li>
          <li>
            <NavLink to="/category/character">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/category/location">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/category/episode">Episodes</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
