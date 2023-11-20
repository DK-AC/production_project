import {Locale_Storage_Theme_Key, Theme, ThemeContext} from './ThemeContext'
import {useContext, useState} from 'react'


type UseThemeResult = {
  toggleTheme: () => void
  theme: Theme
}


export function useTheme(): UseThemeResult {

  const {setTheme,theme}=useContext(ThemeContext)


  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(Locale_Storage_Theme_Key, newTheme)
  }


  return {theme, toggleTheme}
}