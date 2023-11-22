import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/RouteConfig'
import { PageLoader } from 'widgets/pageLoader'
import { BugButton } from 'app/providers/errorBoundary'

export function AppRouter() {
  return (
    <div className="page-wrapper">
      <BugButton />
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                {element}
              </Suspense>
            )}
          />
        ))}
      </Routes>

    </div>
  )
}
