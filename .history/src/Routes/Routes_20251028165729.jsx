import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/NotFoundPage/ErrorPage";
import AllAppsPage from "../Pages/AllAppsPage/AllAppsPage";


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
        element: <AppDea />
      },
    ],
  },
]);
