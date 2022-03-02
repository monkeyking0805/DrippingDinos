import React from 'react';
import { useRoutes } from 'react-router';
import HomePage from './pages/HomePage';
import Collection from './pages/Collection';
import Roadmap from './pages/Roadmap';
import Dao from './pages/Dao';
import Charity from './pages/Charity';
import Shop from './pages/Shop';
import MainLayout from './layouts/MainLayout';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/collection',
          element: <Collection />
        },
        {
          path: '/roadmap',
          element: <Roadmap />
        },
        {
          path: '/dao',
          element: <Dao />
        },
        {
          path: '/charity',
          element: <Charity />
        },
        {
          path: '/shop',
          element: <Shop />
        }
      ]
    }
  ]);
}