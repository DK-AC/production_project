import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from 'shared/config/routeConfig/RouteConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routeConfig.map(({path, element}) => {
          return <Route key={path} path={path} element={element}/>
        })}
      </Routes>
    </Suspense>
  )
}

