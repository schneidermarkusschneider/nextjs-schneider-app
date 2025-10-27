export class ClaimProcessor {
  parseClaims(claimsStr: string) {
    try {
      return JSON.parse(claimsStr);
    } catch {
      return {};
    }
  }
}
