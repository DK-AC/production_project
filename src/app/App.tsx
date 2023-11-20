import React, {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames'
import {AboutPage} from 'pages/about'
import {MainPage} from 'pages/main'
import {useTheme} from 'app/providers/themeProvider'


export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/about'} element={< AboutPage/>}/>
          <Route path={'/'} element={< MainPage/>}/>
        </Routes>
      </Suspense>
      <Link to={'/'}>Main</Link>
    </div>
  )
}

