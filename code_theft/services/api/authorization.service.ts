import axios from "axios";
import { codePoliceRestApi } from "../../utils/businessRestApis";
import { writeStorage, deleteFromStorage } from "@rehooks/local-storage";

export function loginApi(userCredentials: any) {
  return axios.get(codePoliceRestApi("auth/basic"), {
    auth: userCredentials,
  });
}

export function setToken(token: string) {
  writeStorage("token", token);
}

export function logoutFunctionality() {
  deleteFromStorage("token");
  window.history.forward();
}
