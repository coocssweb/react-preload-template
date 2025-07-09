import lazyWithPreload from '@/routes/lazyWithPreload'

const Me = lazyWithPreload(() => import('./me'))
const Address = lazyWithPreload(() => import('./address'))
const Settings = lazyWithPreload(() => import('./settings'))

export { Me, Address, Settings }
