import { MainPage } from 'pages/main'
import { AboutPage } from 'pages/about'
import { NotFoundPage } from 'pages/notFound'
import { ReactNode } from 'react'

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*'
}

type RouteConfigType = {
  path: AppRoutes
  element: ReactNode
}

export const routeConfig: RouteConfigType[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },
  { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },

]
