import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { classNames } from 'shared/lib/classNames';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import cls from './LanguageSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
}

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

export function LanguageSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === Lang.RU ? Lang.EN : Lang.RU;
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={Theme.CLEAR}
    >
      {t('Language')}
    </Button>
  );
}
