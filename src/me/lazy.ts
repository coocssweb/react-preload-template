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

export { Main, Address, Settings }
