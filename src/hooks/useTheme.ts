import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return { theme, setTheme }
}

export { ThemeMode, useTheme }
