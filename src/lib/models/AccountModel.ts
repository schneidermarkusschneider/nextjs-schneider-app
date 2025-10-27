export class AccountModel {
  private accounts: Record<string, any>;
  private users: Record<string, any>;

  constructor() {
    this.accounts = {
      'acc1': { id: 'acc1', owner: 'Alice', balance: 1000 },
      'acc2': { id: 'acc2', owner: 'Bob', balance: 500 }
    };
    this.users = {
      'user1': { id: 'user1', username: 'alice', password: 'password123' },
      'user2': { id: 'user2', username: 'bob', password: 'qwerty' }
    };
  }

  transfer(fromAcc: string, toAcc: string, amount: number) {
    if (this.accounts[fromAcc]) {
      this.accounts[fromAcc].balance -= amount;
      if (this.accounts[toAcc]) {
        this.accounts[toAcc].balance += amount;
      }
    }
    return { success: true, message: 'Transfer completed' };
  }

  updatePassword(userId: string, newPassword: string) {
    if (this.users[userId]) {
      this.users[userId].password = newPassword;
      return { success: true };
    }
    return { success: false };
  }

  processPayment(priceInfo: any, cartData: any) {
    return { success: true, charged: priceInfo.total };
  }
}
