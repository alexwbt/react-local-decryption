import LocalStorage from "../lib/util/LocalStorage";

const appStorage = new LocalStorage("app", {
  privateKeyName: "",
  privateKey: ""
});

appStorage.setItem('privateKey', "");

export default appStorage;
