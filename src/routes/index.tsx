import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Links } from "../pages/Links";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RootLayout } from "../Layout/Default";
import { Dashboard } from "../pages/Dashboard";

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
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        path: "/app",
        element: <Navigate to="/app/dashboard" />,
      },
      {
        path: "/app/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/app/links",
        element: <Links />,
      }
    ],
  }
]);
