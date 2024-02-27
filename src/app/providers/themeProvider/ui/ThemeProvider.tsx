import { FC, useMemo, useState } from 'react';
import { LocaleStorageThemeKey, Theme, ThemeContext } from '../lib/ThemeContext';

type Props = {
  initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LocaleStorageThemeKey) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme, setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
