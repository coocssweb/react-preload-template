import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import routes from './routes'

/**
 * 根据当前路径自动预加载
 */
const useRoutePreloader = () => {
  const location = useLocation()

  useEffect(() => {
    const matchedRoute = routes.find(r => r.path === location.pathname)
    if (matchedRoute && matchedRoute.preload) {
      matchedRoute.preload.forEach(path => {
        const preloadRoute = routes.find(r => r.path === path)
        if (preloadRoute?.component?.preload) {
          preloadRoute.component.preload()
          console.log(`[Preloader] 预加载路由 ${path}`)
        }
      })
    }
  }, [location.pathname])
}

export default useRoutePreloader
