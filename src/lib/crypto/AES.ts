import CryptoJS from 'crypto-js';
import ICrypto from './ICrypto';

export default class AES implements ICrypto {

  public encrypt(value: string, password: string): string {
    return CryptoJS.AES.encrypt(value, password).toString();
  }

  public decrypt(value: string, password: string): string {
    return CryptoJS.AES.decrypt(value, password).toString(CryptoJS.enc.Utf8);
  }

}
