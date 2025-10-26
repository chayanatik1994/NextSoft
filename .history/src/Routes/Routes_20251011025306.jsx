import React from 'react';
import {
  createBrowserRouter,
} from 'react-router';
import Root from '../Pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root 
  },
]);
