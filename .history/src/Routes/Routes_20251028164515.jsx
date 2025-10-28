import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllAppsPage from "../Pages/AllAppsPage/AllAppsPage";

import ErrorPage from "../Pages/NotFoundPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "apps",
        element: <AllAppsPage />,
        children: [
          {
            path: ":id",
            element: <AppDetails/>
          },
        ],
      },
    ],
  },
]);
