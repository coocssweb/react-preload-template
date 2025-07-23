import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '请输入你的邮箱地址' })
    .email({ message: '邮箱地址输入错误' }),
  password: z
    .string()
    .min(1, {
      message: '请输入你的密码'
    })
    .min(7, {
      message: '密码长度必须至少为7个字符'
    })
})

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  /**
   * 提交
   */
  const onSubmit = useCallback((data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="bg-primary-foreground container grid h-svh items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        <Card className="gap-4">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">登录</CardTitle>
            <CardDescription>请输入您的账户信息。</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn('grid gap-3')}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>邮箱或账户名</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-2" size="lg" disabled={isLoading}>
                  登录
                </Button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>

          <CardFooter>
            <Link to="">登录遇到问题？</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default SignIn
