import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/RouteConfig';

export function AppRouter() {
  return (

    <Suspense fallback={<div>loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
}
