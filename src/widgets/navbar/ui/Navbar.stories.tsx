import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
