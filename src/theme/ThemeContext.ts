import {createContext} from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeContextProps = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const Locale_Storage_Theme_Key = 'theme'

export const ThemeContext = createContext<ThemeContextProps>({})