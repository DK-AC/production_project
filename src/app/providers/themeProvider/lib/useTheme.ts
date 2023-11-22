import { useContext, useState } from 'react'
import { LocaleStorageThemeKey, Theme, ThemeContext } from './ThemeContext'

type UseThemeResult = {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LocaleStorageThemeKey, newTheme)
  }

  return { theme, toggleTheme }
}
