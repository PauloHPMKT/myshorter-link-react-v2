import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
