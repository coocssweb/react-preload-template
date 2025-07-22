import React, { useState, HTMLAttributes, useCallback } from 'react'
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
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password'
    })
    .min(7, {
      message: 'Password must be at least 7 characters long'
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
        <div className="mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <h1 className="text-xl font-medium">Shadcn Admin</h1>
        </div>
        <Card className="gap-4">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Login</CardTitle>
            <CardDescription>
              Enter your email and password below to <br />
              log into your account
            </CardDescription>
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
                      <FormLabel>Email</FormLabel>
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                      <Link
                        to="/forgot-password"
                        className="text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75"
                      >
                        Forgot password?
                      </Link>
                    </FormItem>
                  )}
                />
                <Button className="mt-2" disabled={isLoading}>
                  Login
                </Button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background text-muted-foreground px-2">
                      Or continue with
                    </span>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>

          <CardFooter>
            <p className="text-muted-foreground px-8 text-center text-sm">
              By clicking login, you agree to our{' '}
              <a
                href="/terms"
                className="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                className="hover:text-primary underline underline-offset-4"
              >
                Privacy Policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default SignIn
