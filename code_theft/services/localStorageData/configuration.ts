import { writeStorage } from "@rehooks/local-storage";

export function storeConfigInLocal(configurationObj: any) {
  writeStorage("configuration", configurationObj);
}
