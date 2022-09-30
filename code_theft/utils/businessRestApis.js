import { backendUrl } from "../constants/env";

export function codePoliceRestApi(path) {
  return `${backendUrl}${path}`;
}
