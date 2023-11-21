import React from 'react'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames'
import {AppRouter} from 'app/providers/router/AppRouter'
import {Navbar} from 'widgets/navbar'
import {useTheme} from 'app/providers/themeProvider'


export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

