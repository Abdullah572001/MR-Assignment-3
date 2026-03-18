import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Loader from "../components/Loader/Loader";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import Error from "../pages/Error/Error";
import ErrorPage2 from "../pages/ErrorPage2/ErrorPage2";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        HydrateFallback: Loader,
        Component: Home,
      },
      {
        path: "/home/:id",
        loader: () => fetch("/appsData.json"),
        HydrateFallback: Loader,
        Component: AppDetails,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        HydrateFallback: Loader,
        Component: AllApps,
      },
      {
        path : '/installation',
        loader: () => fetch("/appsData.json"),
        HydrateFallback: Loader,
        Component : Installation
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
