import routes from './routes'

/**
 *  手动可控、非阻塞 的预加载
 */
const preloadComponentInIdle = (pathname: String) => {
  const factory = () => {
    routes.find(r => r.path === pathname)?.component?.preload()
  }

  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(() => factory())
  } else {
    setTimeout(factory, 1000)
  }
}

export default preloadComponentInIdle
