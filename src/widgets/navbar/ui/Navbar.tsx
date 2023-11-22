import React from 'react'
import { AppLink } from 'shared/ui/appLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

export function Navbar() {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink to="/">{t('Main')}</AppLink>
        <AppLink to="/about">{t('About')}</AppLink>
      </div>
    </div>
  )
}
