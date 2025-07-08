import React from 'react'

/**
 * 封装 React.lazy，挂载 preload 方法
 */
const lazyWithPreload = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  const Component = React.lazy(factory) as any

  // cache 防止重复调用，产生重复的 Promise 实例
  let _preloadPromise: Promise<any> | undefined
  Component.preload = () => {
    if (!_preloadPromise) {
      _preloadPromise = factory()
    }
    return _preloadPromise
  }

  return Component as React.LazyExoticComponent<T> & {
    preload: () => Promise<any>
  }
}

export default lazyWithPreload
