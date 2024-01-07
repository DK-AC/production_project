import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor, dolorem error fugit id illo itaque natus nemo odit officia sint totam? Ab atque beatae eius eligendi fugit illum iusto laboriosam minus neque odio, possimus quod saepe, sint. Atque consectetur dolor ea est ex facilis fugit illum incidunt inventore itaque laborum libero maxime modi nisi numquam odit pariatur quae quis quos reprehenderit similique sunt tenetur unde, vero vitae. A alias amet aspernatur atque autem debitis eos ex facere, inventore ipsa itaque laborum minus mollitia nam non omnis pariatur provident quibusdam quidem quod repellat sapiente sit totam. Commodi corporis deleniti harum.',
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor, dolorem error fugit id illo itaque natus nemo odit officia sint totam? Ab atque beatae eius eligendi fugit illum iusto laboriosam minus neque odio, possimus quod saepe, sint. Atque consectetur dolor ea est ex facilis fugit illum incidunt inventore itaque laborum libero maxime modi nisi numquam odit pariatur quae quis quos reprehenderit similique sunt tenetur unde, vero vitae. A alias amet aspernatur atque autem debitis eos ex facere, inventore ipsa itaque laborum minus mollitia nam non omnis pariatur provident quibusdam quidem quod repellat sapiente sit totam. Commodi corporis deleniti harum.',
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
