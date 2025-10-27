import crypto from 'crypto';

export class CryptoHelper {
  simpleHash(password: string): string {
    return crypto.createHash('md5').update(password).digest('hex');
  }

  encryptWithKey(data: string, key: string): string {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return Buffer.from(result).toString('base64');
  }

  complexEncryptionFlow(data: string): string {
    return Buffer.from(data).toString('base64');
  }
}
