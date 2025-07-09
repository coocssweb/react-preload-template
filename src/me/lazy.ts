import lazyWithPreload from '@/routes/lazyWithPreload'

const Main = lazyWithPreload(() => import('./pages/main'))
const Address = lazyWithPreload(() => import('./pages/address'))
const Settings = lazyWithPreload(() => import('./pages/settings'))

export { Main, Address, Settings }
