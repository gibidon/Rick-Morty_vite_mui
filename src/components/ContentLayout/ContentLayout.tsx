import { Outlet } from 'react-router-dom'
import * as styles from './contentLayout.module.scss'
import { Container } from '@mui/material'
import { Suspense } from 'react'

export const ContentLayout = () => {
  return (
    <Container maxWidth={'lg'}>
      <Suspense
        fallback={<h2 style={{ color: 'pink' }}>Content loading...</h2>}
      >
        <Outlet />
      </Suspense>
    </Container>
  )
}
