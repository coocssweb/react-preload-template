import lazyWithPreload from '@/routes/lazyWithPreload'

const Main = lazyWithPreload(
  () => import(/* webpackChunkName: "MeMain" */ './pages/main')
)
const Address = lazyWithPreload(
  () => import(/* webpackChunkName: "MeAddress" */ './pages/address')
)
const Settings = lazyWithPreload(
  () => import(/* webpackChunkName: "MeSettings" */ './pages/settings')
)

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
