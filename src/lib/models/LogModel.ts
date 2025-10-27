export class LogModel {
  private logs: any[] = [];

  storeLog(logEntry: any): boolean {
    this.logs.push(logEntry);
    return true;
  }
}
