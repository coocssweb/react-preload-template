import React from 'react'
import { preloadComponentInIdle } from '@routes'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div>
      <h1>Home 页面1234</h1>
      <p>这里是首页内容。</p>
      <Button variant="outline">Button</Button>
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
