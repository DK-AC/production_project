import React, { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/languageSwitcher/ui/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
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
          theme={ButtonTheme.BACKGROUND_INVERTED}
          data-testid="toggle-button"
          type="button"
          onClick={toggleCollapsed}
          square
          size={ButtonSize.L}
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
