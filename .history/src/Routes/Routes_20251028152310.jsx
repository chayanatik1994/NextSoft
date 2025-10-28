import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps'; // Apps page
import Installation from '../Pages/Installation/Installation'; // Installation page
import ErrorPage from '../Pages/NotFoundPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('appData.json'),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
   
    ],
  },
]);
