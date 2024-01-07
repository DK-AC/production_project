import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Primary', theme: AppLinkTheme.PRIMARY }
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Secondary = Template.bind({})
Secondary.args = { children: 'Secondary', theme: AppLinkTheme.SECONDARY }
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
