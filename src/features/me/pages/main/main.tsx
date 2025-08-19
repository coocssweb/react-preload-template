import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const Main = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">您的信息</h1>
      <Card className="w-full rounded-md shadow-sm">
        <CardHeader>
          <CardTitle>个人资料信息</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>这里是个人资料信息。</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>这里是个人资料信息。</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Main
