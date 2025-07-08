import lazyWithPreload from './lazyWithPreload'

import Home from '../home'
const Me = lazyWithPreload(() => import('../me'))
const Settings = lazyWithPreload(() => import('../me/settings'))
const Address = lazyWithPreload(() => import('../me/address'))

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
  {
    path: '/me',
    component: Me,
    preload: ['/me/settings', '/me/address']
  },
  {
    path: '/me/settings',
    component: Settings
  },
  {
    path: '/me/address',
    component: Address
  }
]

export default routes
