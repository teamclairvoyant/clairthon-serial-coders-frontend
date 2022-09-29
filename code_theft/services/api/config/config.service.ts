// @ts-nocheck
import axios from "axios";
import { codePoliceRestApi } from "../../../utils/businessRestApis";
import {
  getRequestHeaders,
  getFetchRequestHeaders,
} from "../authorization.service";

export function createConfiguration(configObj: any = {}) {
  return axios.post(
    codePoliceRestApi("dao/persist/Config"),
    configObj,
    getRequestHeaders()
  );
}

export function updateConfigurations(configObj: any = {}) {
  return axios.post(
    codePoliceRestApi(`dao/update/Config`),
    configObj,
    getRequestHeaders()
  );
}

export function fetchAllConfigurations(configObj: any = {}) {
  return fetch(
    codePoliceRestApi("dao/fetchAll/Config"),
    getFetchRequestHeaders()
  ).then((response) => response.json());
}

export function triggerConfiguration(id: string) {
  return fetch(
    codePoliceRestApi(`search/config/${id}`),
    getFetchRequestHeaders()
  ).then((response) => response.json());
}

export function fetchSearchResults(configOptions: any = {}) {
  const { configId } = configOptions;

  return fetch(
    codePoliceRestApi(`search/config/${configId}?test=true`),
    getFetchRequestHeaders()
  ).then((response) => response.json());
}
