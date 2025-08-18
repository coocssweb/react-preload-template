import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Calendar, Home, Inbox, Search } from 'lucide-react'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

const AppSidebarContent = () => {
  const items = [
    {
      title: '收件箱',
      url: '/',
      icon: Home
    },
    {
      title: '草稿',
      url: '/draft',
      icon: Inbox
    },
    {
      title: '已发送',
      url: '/sent',
      icon: Calendar
    },
    {
      title: '星标邮件',
      url: '/starred',
      icon: Search
    }
  ]

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>账户</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map(item => ( <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={({isActive}) => {
                    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', isActive)
                    return isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''
                  }} >
                    <item.icon className="text-sidebar-icon" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}

export default AppSidebarContent
