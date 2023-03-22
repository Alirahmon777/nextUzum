import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastError = (message) => {
  return toast.error(message, {
    autoClose: 1500,
    position: "top-center",
  });
};
const toastSuccess = (message) => {
  return toast.success(message, {
    autoClose: 1500,
    position: "top-center",
  });
};

export { toastError, toastSuccess };
