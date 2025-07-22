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
import Layout from './layout'
import { SignIn, SignUp } from './features/sign'

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
    <MyRoutes />
  </Router>
)
