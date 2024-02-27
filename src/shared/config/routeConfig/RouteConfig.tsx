import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';
import { NotFoundPage } from 'pages/notFound';
import { ReactNode } from 'react';

export enum RoutePath {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*'
}

type RouteConfigType = {
  path: RoutePath
  element: ReactNode
}

export const routeConfig: RouteConfigType[] = [
  { path: RoutePath.MAIN, element: <MainPage /> },
  { path: RoutePath.ABOUT, element: <AboutPage /> },
  { path: RoutePath.NOT_FOUND, element: <NotFoundPage /> },

];
