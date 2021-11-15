import axios from "axios";
import { Auth } from "../constants/links";
import { goToInitial } from "../routes/coordinator";

export const authentication = (data, navigate) => {
  axios
    .post(`${Auth}`, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToInitial(navigate);
    })
    .catch(() => {
      alert("algo inesperado ocorreu");
    });
};
