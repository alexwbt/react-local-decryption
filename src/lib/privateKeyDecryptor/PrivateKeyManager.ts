import ICrypto from "../crypto/ICrypto";

export interface IStorage {
  set(value: string): void;
  get(): string;
}

export default class PrivateKeyManager {

  constructor(
    private crypto: ICrypto,
    private storage: IStorage
  ) { }

  setKey(value: string, password: string) {
    const encryptedKey = this.crypto.encrypt(value, password);
    this.storage.set(encryptedKey);
  }

  getKey(password: string) {
    const encryptedKey = this.storage.get();
    const decryptedKey = this.crypto.decrypt(encryptedKey, password);
    return decryptedKey;
  }

}
