import React, { useRef } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  Button,
  ConfirmDialog
} from '@/components'
import { cn } from '@/lib/utils'
import NameEditor from './name-editor'

const InformationLine = ({
  label,
  value,
  className
}: {
  label: string
  value: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        'px-6 py-3 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-100',
        className
      )}
    >
      <dt className="text-sm/6  text-gray-900">{label}</dt>
      <dd className="text-sm/6 text-gray-700 sm:col-span-2 font-bold">
        {value}
      </dd>
    </div>
  )
}

const Main = () => {
  const nameEditorRef = useRef(null)

  return (
    <>
      <div className="max-w-6xl m-auto">
        <div className="h-10"></div>
        <h1 className="text-2xl font-bold">您的信息</h1>
        <div className="h-10"></div>

        <Card className="w-full rounded-md shadow-sm overflow-hidden">
          <CardContent className="pt-6 border-b">
            <div className="flex flex-row gap-6 items-center">
              <div>
                <img
                  className="size-40 shadow-xl rounded-full"
                  alt=""
                  src="https://avatars.githubusercontent.com/u/11325344?s=40&v=4"
                />
              </div>

              <div className="max-w-96 ">
                <div className="text-sm/6 mb-4">
                  添加照片，个性化你的账户。 你的个人资料照片会显示在使用你的
                  Microsoft 帐户的应用和设备上。
                </div>
                <Button variant="outline" size="sm">
                  上传照片
                </Button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="grid sm:grid-cols-3 sm:gap-4 py-4">
            <dt className="text-sm/6  text-gray-900">全名</dt>
            <div className=" sm:col-span-2 flex">
              <dd className="text-sm/6 text-gray-700 font-bold flex-1">
                王佳欣
              </dd>
              <Button
                variant="link"
                size="sm"
                className="p-0 h-auto"
                onClick={() => {
                  nameEditorRef.current.onOpen()
                }}
              >
                编辑姓名
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="h-2"></div>

        <Card className="w-full rounded-md shadow-sm overflow-hidden">
          <CardHeader className="border-b border-gray-200 flex-row justify-between py-3">
            <CardTitle className="text-sm/6">个人资料信息</CardTitle>
            <Button variant="link" size="sm" className="p-0 h-auto">
              编辑个人资料信息
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <InformationLine
              label="出生日期"
              value="1991/03/26"
              className="border-b border-gray-200"
            ></InformationLine>

            <InformationLine
              label="国家或地区"
              value="中国"
              className="border-b border-gray-200"
            ></InformationLine>

            <InformationLine label="语言" value="中文(中国)"></InformationLine>
          </CardContent>
        </Card>
      </div>

      <NameEditor ref={nameEditorRef}></NameEditor>
    </>
  )
}

export default Main
