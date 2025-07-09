import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark')
    } else {
      document.documentElement.classList.remove('theme-dark')
    }
  }, [theme])

  return { theme, setTheme }
}

export { ThemeMode, useTheme }
