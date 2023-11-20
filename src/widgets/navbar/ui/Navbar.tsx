import React from 'react'
import {AppLink} from 'shared/ui/AppLink'
import {classNames} from 'shared/lib/classNames'
import cls from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <AppLink to={'/'}>Main</AppLink>
      <AppLink to={'/about'}>About</AppLink>
    </div>
  )
}

