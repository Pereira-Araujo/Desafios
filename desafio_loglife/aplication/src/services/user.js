import axios from "axios";
import { AUTH_URL } from "./auth";
import {goToInitial} from '../routes/Coordinator'

export const login = (data,history) => {
  axios
    .post(`${AUTH_URL}`, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToInitial(history)
    })
    .catch((error) => {
      alert(error);
    });
};
