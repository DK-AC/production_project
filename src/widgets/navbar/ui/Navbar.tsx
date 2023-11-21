import React from 'react'
import {AppLink} from 'shared/ui/appLink/AppLink'
import {classNames} from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher/ui/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  )
}

