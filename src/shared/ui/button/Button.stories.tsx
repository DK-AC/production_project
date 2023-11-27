import { ComponentMeta, ComponentStory } from '@storybook/react'

import React from 'react'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { Button } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  theme: Theme.DARK,
}

export const OUTLINE = Template.bind({})
OUTLINE.args = {
  children: 'Outline',
  theme: Theme.OUTLINE,
}
