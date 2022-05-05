import CryptoAES from 'crypto-js/aes';
import ICrypto from './ICrypto';

export default class AES implements ICrypto {

  public encrypt(value: string, password: string): string {
    return CryptoAES.encrypt(value, password).ciphertext.toString();
  }

  public decrypt(value: string, password: string): string {
    return CryptoAES.decrypt(value, password).toString();
  }

}
