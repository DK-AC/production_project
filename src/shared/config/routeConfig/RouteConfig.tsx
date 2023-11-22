import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';
import { ReactNode } from 'react';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about'
}

type RouteConfigType = {
  path: AppRoutes
  element: ReactNode
}

export const routeConfig: RouteConfigType[] = [
  { path: AppRoutes.MAIN, element: <MainPage /> },
  { path: AppRoutes.ABOUT, element: <AboutPage /> },

];
