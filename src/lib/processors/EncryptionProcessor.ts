export class EncryptionProcessor {
  prepareData(data: string): string {
    return data;
  }

  preprocessSensitiveData(data: string, metadata: any): string {
    if (metadata.compress) {
      return data.replace(/\s/g, '');
    }
    return data;
  }

  finalizeStorage(encryptedData: string, metadata: any) {
    return {
      stored: encryptedData,
      metadata: metadata,
      algorithm: 'base64'
    };
  }
}
