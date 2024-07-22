import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, Footer, AuthStatus } from './components'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PrivatePage, Home } from './pages'
import { CategoryLayout } from './layouts/CategoryLayout/CategoryLayout'
import { INTERNAL_PATHS } from './internalPaths'
import { Suspense, lazy } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from './muiThemes/theme'

const Login = lazy(() =>
  import(`./pages/Login/Login`).then(module => ({
    default: module['Login'],
  })),
)
const CategoryPage = lazy(() =>
  import(`./pages/CategoryPage/CategoryPage`).then(module => ({
    default: module['CategoryPage'],
  })),
)
const DetailedPage = lazy(() =>
  import(`./pages/DetailedPage/DetailedPage`).then(module => ({
    default: module['DetailedPage'],
  })),
)
const NotFound = lazy(() =>
  import(`./pages/NotFound/NotFound`).then(module => ({
    default: module['NotFound'],
  })),
)

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavPanel />
        <AuthStatus />

        <ErrorBoundary>
          <Routes>
            <Route path={INTERNAL_PATHS.home} index element={<Home />} />
            <Route
              path={INTERNAL_PATHS.login}
              element={
                <Suspense fallback="Loading login page..">
                  <Login />
                </Suspense>
              }
            />

            <Route
              path={INTERNAL_PATHS.category}
              element={
                <PrivatePage>
                  <CategoryLayout />
                </PrivatePage>
              }
            >
              <Route
                path={INTERNAL_PATHS.specificCategory}
                element={<CategoryPage />}
              />
              <Route
                path={INTERNAL_PATHS.specificCategoryElement}
                element={<DetailedPage />}
              />
            </Route>
            <Route path={INTERNAL_PATHS.notFound} element={<NotFound />} />
          </Routes>
        </ErrorBoundary>

        <Footer />
      </AuthProvider>
    </ThemeProvider>
  )
}
