import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar
} from '@/components/ui/sidebar'
import AppSidebarHeader from './sidebarHeader'
import AppSidebarContent from './sidebarContent'
import AppSidebarFooter from './sidebarFooter'

const Layout = () => {
  const [user, setUser] = useState({
    avatar: '',
    name: 'wangjiaxin',
    email: 'wangjiaxin@gmail.com'
  })
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebarHeader></AppSidebarHeader>
        <AppSidebarContent></AppSidebarContent>
        <AppSidebarFooter user={user}></AppSidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger />
        <Outlet></Outlet>
      </main>
    </SidebarProvider>
  )
}

export default Layout
