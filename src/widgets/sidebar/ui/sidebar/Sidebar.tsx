import React, { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/languageSwitcher/ui/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/appLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/RouteConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/home.svg'
import cls from './Sidebar.module.scss'

type SidebarProps = {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid="sidebar"
    >
      <Button
        className={cls.toggleBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="toggle-button"
        type="button"
        onClick={toggleCollapsed}
        square
        size={ButtonSize.L}
      >
        {t(collapsed ? '>' : '<')}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.item} to={RoutePath.MAIN}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Main')}</span>
        </AppLink>
        <AppLink className={cls.item} to={RoutePath.ABOUT}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={classNames(cls.switcher, { [cls.switcherCollapsed]: collapsed })}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  )
}
