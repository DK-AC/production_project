import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { NotFoundPage } from './NotFound';

export default {
  title: 'pages/NotFound',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args:any) => <NotFoundPage {...args} />;

export const LIGHT = Template.bind({});
LIGHT.args = {};
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
