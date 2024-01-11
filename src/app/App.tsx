import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router/AppRouter'
import { Navbar } from 'widgets/navbar'
import { useTheme } from 'app/providers/themeProvider'
import { Sidebar } from 'widgets/sidebar'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
