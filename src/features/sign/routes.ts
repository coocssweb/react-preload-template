import lazyWithPreload from '@/routes/lazyWithPreload'

const SignIn = lazyWithPreload(
  () => import(/* webpackChunkName: "SignIn" */ './pages/signIn')
)
const SignUp = lazyWithPreload(
  () => import(/* webpackChunkName: "SignUp" */ './pages/signUp')
)

const SignRoutes = [
  {
    path: '/sign/sign_in',
    component: SignIn,
    preload: ['/sign/sign_up']
  },
  {
    path: '/sign/sign_up',
    component: SignUp
  }
]

export default SignRoutes
