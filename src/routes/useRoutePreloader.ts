import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import routes from './routes'

/**
 * 根据当前路径自动预加载
 */
const useRoutePreloader = () => {
  const location = useLocation()

  useEffect(() => {
    // 如果后期要做「动态参数路由」匹配（如 /user/:id），useRoutePreloader 可以换成支持正则或 path-to-regexp 做匹配。
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
