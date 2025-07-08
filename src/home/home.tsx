import React from 'react'
import { preloadComponentInIdle } from '@routes'

const Home = () => {
  return (
    <div>
      <h1>Home 页面</h1>
      <p>这里是首页内容。</p>

      <button
        onClick={() => {
          // 预加载
          preloadComponentInIdle('/me/settings')
        }}
      >
        测试空闲加载
      </button>
    </div>
  )
}

export default Home
