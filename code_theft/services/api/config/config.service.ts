import axios from "axios";
import { codePoliceRestApi } from "../../../utils/businessRestApis";

export function createConfiguration(configObj: any = {}) {
  return axios.post(codePoliceRestApi("/dao/persist/Config"), configObj);
}

export function fetchAllConfigurations(configObj: any = {}) {
  return axios.get(codePoliceRestApi("/"));
}
