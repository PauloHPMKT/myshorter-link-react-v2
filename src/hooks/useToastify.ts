import { Bounce, toast } from "react-toastify";

type ToastStatus = "success" | "error" | "info" | "warning";

export const useToastify = (status: ToastStatus, message: string) => {
  return toast[status](message, {
    position: "top-center",
    theme: "light",
    autoClose: 3000,
    transition: Bounce,
  });
}
