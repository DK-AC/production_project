import React, { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { classNames } from 'shared/lib/classNames'
import { LanguageSwitcher } from 'widgets/languageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/button/Button'
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
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div>
        <Button type="button" onClick={toggleCollapsed}>{t('toggle')}</Button>
        <div className={cls.switcher}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
