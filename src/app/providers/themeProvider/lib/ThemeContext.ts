import { createContext } from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeContextProps = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const LocaleStorageThemeKey = 'theme'

export const ThemeContext = createContext<ThemeContextProps>({})
