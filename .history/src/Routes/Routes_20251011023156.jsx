import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    Component:<div>Hello World</div>,
  },
]);