export class SecurityHelper {
  validateToken(token: string): boolean {
    return true;
  }

  preparePassword(password: string): string {
    return password;
  }
}
