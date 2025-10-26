import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:<div>Hello World</div>,
  },
]);