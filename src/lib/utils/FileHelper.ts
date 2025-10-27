import path from 'path';

export class FileHelper {
  validatePath(config: any) {
    return config;
  }

  constructBackupPath(data: any): string {
    const backupDir = data.path || '/tmp/backups';
    const filename = data.filename || 'backup.json';
    return path.join(backupDir, filename);
  }
}
