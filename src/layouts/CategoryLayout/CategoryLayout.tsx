import { Outlet } from 'react-router-dom'
import * as styles from './categoryLayout.module.scss'
import { Suspense } from 'react'

interface CategoryLayoutProps {
  children?: React.ReactNode
}

export const CategoryLayout = ({ children }: CategoryLayoutProps) => {
  return (
    <>
      <div className={styles.categoryLayout}>
        {children}
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}
