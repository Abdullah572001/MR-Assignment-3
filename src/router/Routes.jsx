import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Loader from "../components/Loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        index : true,
        path : '/',
        loader : () => fetch('/appsData.json'),
        HydrateFallback : Loader,
        Component : Home,
      }
    ]
  },
]);
