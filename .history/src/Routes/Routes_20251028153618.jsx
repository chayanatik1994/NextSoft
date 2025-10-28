import React from 'react';
import {
  createBrowserRouter,
} from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/NotFoundPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children :[
        {
            index :true,
            loader : ()=> fetch('appData.json'),
            path : "/",
            Component :Home  
        },{
          path:'/apps',
          element: <AllAppsPage></AllAppsPage>

        }
    ]

  },
]);
