export class AuthModel {
  private users: Record<string, any>;
  private mfaCodes: Record<number, string>;

  constructor() {
    this.users = {
      'alice': { username: 'alice', password: 'password123', id: 1 },
      'bob': { username: 'bob', password: 'qwerty', id: 2 },
      'admin': { username: 'admin', password: 'admin', id: 3 }
    };
    this.mfaCodes = {
      1: '123456',
      2: '654321',
      3: '000000'
    };
  }

  findUser(username: string, password: string) {
    const user = this.users[username];
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  findUserByCredentials(credentials: any) {
    return this.findUser(credentials.username, credentials.password);
  }

  verifyMfaCode(userInfo: any, code: string): boolean {
    const expectedCode = this.mfaCodes[userInfo.user_id];
    return code === expectedCode;
  }
}
