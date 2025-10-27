import fs from 'fs';

export class BackupProcessor {
  prepareBackupData(config: any) {
    return config;
  }

  writeBackupFile(filePath: string, data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data));
    return { success: true, path: filePath };
  }
}
