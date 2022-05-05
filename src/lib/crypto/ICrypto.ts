
export interface IEncryptor {
  encrypt(value: string, key: string): string;
}

export interface IDecryptor {
  decrypt(value: string, key: string): string;
}

export default interface ICrypto extends IEncryptor, IDecryptor { }
