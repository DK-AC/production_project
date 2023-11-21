import React from 'react'
import {AppLink} from 'shared/ui/appLink/AppLink'
import {classNames} from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next'

export const Navbar = () => {

  const {t, i18n} = useTranslation()

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }


  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink to={'/'}>{t('Main')}</AppLink>
        <AppLink to={'/about'}>{t('About')}</AppLink>
      </div>
    </div>
  )
}

