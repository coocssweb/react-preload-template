import React from 'react'

/**
 * 封装 React.lazy，挂载 preload 方法
 */
const lazyWithPreload = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  const Component = React.lazy(factory) as any
  Component.preload = factory

  return Component as React.LazyExoticComponent<T> & {
    preload: () => Promise<any>
  }
}

export default lazyWithPreload
