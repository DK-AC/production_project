import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import Main from './Main'

export default {
  title: 'pages/Main',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args: any) => <Main {...args} />

export const LIGHT = Template.bind({})
LIGHT.args = {}
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
