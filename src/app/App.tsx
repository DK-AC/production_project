import React from 'react'
import {Link} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames'
import {useTheme} from 'app/providers/themeProvider'
import {AppRouter} from 'app/providers/router/AppRouter'


export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
      <Link to={'/'}>Main</Link>
    </div>
  )
}

