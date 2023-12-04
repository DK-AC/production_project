import React, { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/languageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext'
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
      <div>
        <Button
          className={cls.toggleBtn}
          theme={Theme.OUTLINE}
          data-testid="toggle-button"
          type="button"
          onClick={toggleCollapsed}
        >
          {t(collapsed ? '>' : '<')}
        </Button>
        <div className={classNames(cls.switcher, { [cls.switcherCollapsed]: collapsed })}>
          <ThemeSwitcher />
          <LanguageSwitcher short={collapsed} />
        </div>
      </div>
    </div>
  )
}
