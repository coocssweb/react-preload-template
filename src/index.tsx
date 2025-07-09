import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom'

import '@/assets/styles/index.less'
import { routes, useRoutePreloader } from './routes'

const MyRoutes = () => {
  const location = useLocation()
  useRoutePreloader()

  return (
    <Routes location={location}>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        ></Route>
      ))}
    </Routes>
  )
}

const root = createRoot(document.getElementById('app')!)
root.render(
  <Router>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> | <Link to="/me">Me</Link> |{' '}
      <Link to="/me/settings">MeSettings</Link> |{' '}
      <Link to="/me/address">MeAddress</Link>
    </nav>
    <MyRoutes />
  </Router>
)
