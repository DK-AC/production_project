import {FC, useMemo, useState} from 'react'
import {Locale_Storage_Theme_Key, Theme, ThemeContext} from './ThemeContext'

const defaultTheme = localStorage.getItem(Locale_Storage_Theme_Key) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {

  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme, setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )

}