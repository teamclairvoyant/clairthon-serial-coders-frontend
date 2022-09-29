import axios from "axios";
import { codePoliceRestApi } from "../../utils/businessRestApis";
import { writeStorage, deleteFromStorage } from "@rehooks/local-storage";
import ls from "local-storage";

export function loginApi(userCredentials: any) {
  return axios.get(codePoliceRestApi("auth/basic"), {
    auth: userCredentials,
  });
}

export function setToken(token: string) {
  writeStorage("token", token);
}

export function getToken() {
  // @ts-ignore
  return ls.get("token");
}

export function getRequestHeaders() {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };
}

export function getFetchRequestHeaders() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return requestOptions;
}

export function logoutFunctionality() {
  deleteFromStorage("token");
  window.history.forward();
}
