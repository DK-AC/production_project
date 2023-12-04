import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { PageError } from './PageError'

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const LIGHT = Template.bind({})
LIGHT.args = {}
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
