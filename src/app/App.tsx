import React from 'react'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames'
import {useTheme} from 'app/providers/themeProvider'
import {AppRouter} from 'app/providers/router/AppRouter'
import {Navbar} from 'widgets/navbar'


export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

