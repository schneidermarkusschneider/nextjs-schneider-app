import sqlite3 from 'better-sqlite3';

export class DatabaseModel {
  private db: any;

  constructor() {
    this.db = new sqlite3(':memory:');
    this.initDb();
  }

  private initDb() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        role TEXT
      )
    `);
    this.db.exec("INSERT INTO users VALUES (1, 'Alice', 'alice@example.com', 'user')");
    this.db.exec("INSERT INTO users VALUES (2, 'Bob', 'bob@example.com', 'admin')");
    this.db.exec("INSERT INTO users VALUES (3, 'Charlie', 'charlie@example.com', 'user')");
  }

  executeQuery(query: string) {
    const sql = `SELECT * FROM users WHERE name LIKE '%${query}%'`;
    const results = this.db.prepare(sql).all();
    return { results };
  }

  executeComplexQuery(queryData: any) {
    const results = this.db.prepare(queryData.sql).all();
    return { results };
  }
}
