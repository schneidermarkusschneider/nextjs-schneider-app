export class UserModel {
  private users: Record<string, any>;
  private documents: Record<string, any>;

  constructor() {
    this.users = {
      '1': { id: '1', name: 'Alice', role: 'user', email: 'alice@example.com', ssn: '123-45-6789' },
      '2': { id: '2', name: 'Bob', role: 'admin', email: 'bob@example.com', ssn: '987-65-4321' },
      '3': { id: '3', name: 'Charlie', role: 'user', email: 'charlie@example.com', ssn: '456-78-9012' }
    };
    this.documents = {
      'doc1': { id: 'doc1', title: 'Public Document', content: 'This is public', owner: '1' },
      'doc2': { id: 'doc2', title: 'Private Document', content: 'Secret data', owner: '2' },
      'doc3': { id: 'doc3', title: 'Confidential Document', content: 'Top secret', owner: '2' }
    };
  }

  fetchById(userId: string) {
    return this.users[userId] || {};
  }

  retrieveMultiple(filterResult: any) {
    return Object.values(this.users);
  }

  getDocumentWithValidation(docId: string, accessGranted: boolean) {
    return this.documents[docId] || {};
  }
}
