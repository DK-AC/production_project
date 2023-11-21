import React, {FC, useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher'
import {classNames} from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'

type SidebarProps = {
  className?: string
}

export const Sidebar:FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <div>
        <button onClick={toggleCollapsed}>toggle</button>
        <div className={cls.switcher}>
        <ThemeSwitcher/>
        </div>
      </div>
    </div>
  )
}

