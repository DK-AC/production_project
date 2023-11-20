import React, {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {AboutAsync} from './pages/about/About.async'
import {MainAsync} from './pages/main/Main.async'
import {useTheme} from './theme/useTheme'
import {classNames} from './helpers/classNames/classNames'


export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/about'} element={< AboutAsync/>}/>
          <Route path={'/'} element={< MainAsync/>}/>
        </Routes>
      </Suspense>
      <Link to={'/'}>Main</Link>
    </div>
  )
}

