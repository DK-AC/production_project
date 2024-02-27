import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: any) => <Loader {...args} />;

export const LIGHT = Template.bind({});
LIGHT.args = {};
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
