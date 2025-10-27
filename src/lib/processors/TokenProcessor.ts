export class TokenProcessor {
  extractMfaCode(data: any): string {
    return data.code || '';
  }

  validateCodeFormat(code: string): string {
    return String(code);
  }
}
