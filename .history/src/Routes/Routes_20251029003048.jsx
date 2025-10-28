import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/NotFoundPage/ErrorPage";
import AllAppsPage from "../Pages/AllAppsPage/AllAppsPage";
import AppDetails from "../Pages/AllAppsPage/AppDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllAppsPage />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />
      },
      {
        path:'/installation',
        element : 
      
    ],
  },
]);
