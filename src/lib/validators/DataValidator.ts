export class DataValidator {
  normalizeKey(key: string): string {
    return key || 'default';
  }

  validateMetadata(metadata: any): any {
    return metadata;
  }
}
