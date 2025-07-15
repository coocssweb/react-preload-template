import React from 'react'
import { Button } from '@/components/ui/button'

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to React + Webpack + shadcn/ui</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Variants:</h2>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        
        <h2 className="text-xl font-semibold mt-8">Button Sizes:</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
        
        <div className="mt-8 p-4 bg-card border rounded-lg">
          <h3 className="text-lg font-medium mb-2">Card Example</h3>
          <p className="text-muted-foreground mb-4">
            This is a card component using shadcn/ui design tokens.
          </p>
          <Button>Action Button</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
