import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, Footer, AuthStatus } from './components'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PAGE_NAMES } from './pages/PageNames'
import { LazyPage } from './pages/LazyPage/LazyPage'
import { PrivatePage } from './pages'
import { CategoryLayout } from './layouts/CategoryLayout/CategoryLayout'
import { INTERNAL_PATHS } from './internalPaths'
import { lazy } from 'react'

import { Home } from './pages'
// import { Login } from './pages'
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
// const PrivatePage = lazy(() =>
//   import(`./pages/PrivatePage/PrivatePage`).then(module => ({
//     default: module['PrivatePage'],
//   })),
// )
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
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      {/* <ErrorBoundary> */}
      <Routes>
        <Route
          path={INTERNAL_PATHS.home}
          index
          // element={<LazyPage name={PAGE_NAMES.Home} />}
          element={
            // <Suspense fallback={'loading home..'}>
            <Home />
            // </Suspense>
          }
        />
        <Route
          path={INTERNAL_PATHS.login}
          // element={<LazyPage name={PAGE_NAMES.Login} />}
          element={<Login />}
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
            // element={<LazyPage name={PAGE_NAMES.CategoryPage} />}
            element={<CategoryPage />}
          />
          <Route
            path={INTERNAL_PATHS.specificCategoryElement}
            // element={<LazyPage name={PAGE_NAMES.DetailedPage} />}
            element={<DetailedPage />}
          />
        </Route>
        <Route
          path={INTERNAL_PATHS.notFound}
          // element={<LazyPage name={PAGE_NAMES.NotFound} />}
          element={<NotFound />}
        />
      </Routes>
      {/* </ErrorBoundary> */}

      <Footer />
    </AuthProvider>
  )
}
