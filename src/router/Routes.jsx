import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Loader from "../components/Loader/Loader";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        index : true,
        path : '/',
        loader : () => fetch('/appsData.json'),
        HydrateFallback : Loader,
        Component : Home,
      },
      {
        path : '/home/:id',
        loader : () => fetch('/appsData.json'),
        HydrateFallback : Loader,
        Component : AppDetails,
      }
    ]
  },
]);
