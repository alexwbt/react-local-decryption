import { IDecryptor } from "../crypto/ICrypto";
import PrivateKeyManager from "./PrivateKeyManager";

export default class PrivateKeyDecryptor {

  constructor(
    private decryptor: IDecryptor,
    private privateKeyManager: PrivateKeyManager
  ) { }

  public decrypt(value: string, password: string) {
    const privateKey = this.privateKeyManager.getKey(password);
    return this.decryptor.decrypt(value, privateKey);
  }

}
