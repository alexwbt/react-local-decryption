import LocalStorage from "../lib/util/LocalStorage";

const appStorage = new LocalStorage("app", {
  privateKeyName: "",
  privateKey: ""
});

export default appStorage;
