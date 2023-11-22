import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/RouteConfig'
import { useTranslation } from 'react-i18next'
import { PageLoader } from 'widgets/pageLoader'

export function AppRouter() {
  const { t } = useTranslation()

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>

        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>

    </div>
  )
}
