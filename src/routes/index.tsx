import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Links } from "../pages/Links";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/links",
    element: <Links />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
