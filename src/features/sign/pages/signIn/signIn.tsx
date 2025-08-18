import React, { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
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
import { PasswordInput } from '@/components/password-input'

// 表单校验规则，使用 zod 定义邮箱和密码的校验逻辑
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
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  // 初始化表单，设置校验器和默认值
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  /**
   * 提交表单时触发，模拟登录请求
   */
  const onSubmit = useCallback((data: z.infer<typeof formSchema>) => {
    navigate('/')
  }, [])

  return (
    <div className="container grid h-svh items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        {/* 登录卡片 */}
        <Card className="gap-4 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight">登录</CardTitle>
            <CardDescription>请输入您的账户信息。</CardDescription>
          </CardHeader>

          <CardContent>
            {/* 表单组件，集成 react-hook-form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn('grid gap-5')}
              >
                {/* 邮箱输入项 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold">
                        邮箱或账户名
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 密码输入项 */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold">密码</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 登录按钮，加载时禁用 */}
                <Button className="mt-2" size="lg" disabled={isLoading}>
                  登录
                </Button>

                {/* 辅助链接和分割线 */}
                <div className="flex flex-col items-center  justify-center">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      首次使用 Proton？
                    </span>
                    <Link
                      to="/sign/signUp"
                      className="text-sm text-primary underline hover:no-underline"
                    >
                      请创建账户
                    </Link>
                    <span>。</span>
                  </div>

                  <div className="relative my-2 w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                  </div>

                  <Link
                    to=""
                    className="text-sm text-primary underline hover:no-underline"
                  >
                    登录遇到问题？
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignIn
