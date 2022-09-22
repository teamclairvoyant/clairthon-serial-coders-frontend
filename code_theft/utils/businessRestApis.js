import { backendUrl } from "../constants/env";

export function codePoliceRestApi(path) {
  console.log("#995#: domain ", `${backendUrl}${path}`);
  return `${backendUrl}${path}`;
}
