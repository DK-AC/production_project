import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import About from './About'

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = (args: any) => <About {...args} />

export const LIGHT = Template.bind({})
LIGHT.args = {}
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
