import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/themeProvider';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
