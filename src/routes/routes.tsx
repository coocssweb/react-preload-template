import Home from '../home'
import meRoutes from '@/me'

interface RouteConfig {
  path: string
  component: any
  preload?: string[]
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    preload: ['/me']
  },
  ...meRoutes
]

export default routes
