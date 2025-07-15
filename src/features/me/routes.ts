import { Main, Settings, Address } from './lazy'

const meRoutes = [
  {
    path: '/me',
    component: Main,
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

export default meRoutes
