import JSEncrypt from "jsencrypt";
import { IDecryptor } from "./ICrypto";

export default class RSA implements IDecryptor {

  public decrypt(value: string, key: string): string {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(key);

    return decrypt.decrypt(value) || "Failed";
  }

}
