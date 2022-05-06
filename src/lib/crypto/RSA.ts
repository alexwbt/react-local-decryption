import JSEncrypt from "jsencrypt";
import { IDecryptor } from "./ICrypto";

export default class RSA implements IDecryptor {

  public decrypt(value: string, key: string): string {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(key);

    const output = decrypt.decrypt(value);

    if (output === false)
      throw new Error("RSA: Failed to decrypt value");

    return output;
  }

}
