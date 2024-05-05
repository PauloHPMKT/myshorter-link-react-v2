import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ToastContainer />
    <RouterProvider router={router} />
  </AuthProvider>
);
