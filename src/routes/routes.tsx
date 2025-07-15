import Home from '@/features/home'
import meRoutes from '@/features/me'

// TODO:自动聚合
// const modules = import.meta.glob('../*/routes.ts', { eager: true });
// export const routes = Object.values(modules).flatMap((m: any) => m.default || []);

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
