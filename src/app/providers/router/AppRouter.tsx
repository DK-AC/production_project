import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/RouteConfig'
import { useTranslation } from 'react-i18next'

export function AppRouter() {
  const { t } = useTranslation()

  return (

    <Suspense fallback={<div>{t('loading')}</div>}>
      <div className="page-wrapper">
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}
