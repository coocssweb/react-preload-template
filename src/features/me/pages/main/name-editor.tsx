import React, { useState, useImperativeHandle, useRef } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ConfirmDialog,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input
} from '@/components'

interface NameEditorRef {
  onOpen: () => void
}

const formSchema = z.object({
  name: z.string().min(1, { message: '请输入你的名字' })
})

const NameEditor = React.forwardRef<NameEditorRef>((_, ref) => {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })

  const nameValue = form.watch('name')
  const isNameChanged = nameValue !== ''

  const onSubmit = v => {
    console.log('ddddddddddddddddddddddddddddddddddddddd', v)
  }

  useImperativeHandle(
    ref,
    (): NameEditorRef => ({
      onOpen() {
        setOpen(true)
      }
    })
  )

  return (
    <ConfirmDialog
      open={open}
      title="编辑名称"
      confirmText="保存"
      cancelText="取消"
      confirmDisable={!isNameChanged}
      onOpenChange={v => {
        setOpen(v)
        if (!v) {
          form.clearErrors()
        }
      }}
      onConfirm={() => {
        form.handleSubmit(onSubmit)()
      }}
    >
      <div className="h-2"></div>
      <Form {...form}>
        {/* 邮箱输入项 */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="请输入名字" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <div className="h-2"></div>
    </ConfirmDialog>
  )
})

export default NameEditor
