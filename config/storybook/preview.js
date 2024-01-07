import { addDecorator } from '@storybook/react'
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/RouterDecorator'
import { Theme } from '../../src/app/providers/themeProvider/lib/ThemeContext'
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
