import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string
  short: boolean
}

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

export function LanguageSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const mods = { [cls.languageSwitcherCollapsed]: short };

  const toggleLanguage = async () => {
    const newLang = i18n.language === Lang.RU ? Lang.EN : Lang.RU;
    i18n.changeLanguage(newLang);
  };

  const langKey = short ? 'shortLang' : 'Language';
  const translatedString = t(langKey);

  return (
    <Button
      className={classNames(cls.languageSwitcher, mods, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {translatedString}
    </Button>
  );
}
