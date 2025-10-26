import React from 'react';
import {
  createBrowserRouter,
} from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children :[
        {
            index :true,
            loader : ()=> fetch('appData.jso')
            path : "/",
            Component :Home  
        }
    ]

  },
]);
