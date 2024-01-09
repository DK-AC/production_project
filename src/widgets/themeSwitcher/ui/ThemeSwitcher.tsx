import React, { FC } from 'react'
import { useTheme } from 'app/providers/themeProvider'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

type ThemeSwitcherProps = {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
