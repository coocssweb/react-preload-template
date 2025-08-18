import React from 'react'
import { useLanguage } from '@/hooks'
import { Button } from './ui/button'

export const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <Button
        variant={currentLanguage === 'zh' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('zh')}
      >
        中文
      </Button>
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('en')}
      >
        English
      </Button>
    </div>
  )
}