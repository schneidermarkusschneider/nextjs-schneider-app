import { ConfigModel } from '../models/ConfigModel';
import { FileHelper } from '../utils/FileHelper';
import { BackupProcessor } from '../processors/BackupProcessor';

export class ConfigService {
  private configModel: ConfigModel;
  private fileHelper: FileHelper;
  private backupProcessor: BackupProcessor;

  constructor() {
    this.configModel = new ConfigModel();
    this.fileHelper = new FileHelper();
    this.backupProcessor = new BackupProcessor();
  }

  getConfiguration() {
    return this.configModel.getAllSettings();
  }

  processDebugRequest(params: any) {
    const configData = this.configModel.getDebugInfo();
    return {
      config: configData,
      environment: process.env,
      params: params
    };
  }

  initiateBackupProcess(backupConfig: any) {
    const validatedConfig = this.fileHelper.validatePath(backupConfig);
    const preparedData = this.backupProcessor.prepareBackupData(validatedConfig);
    const filePath = this.fileHelper.constructBackupPath(preparedData);
    return this.backupProcessor.writeBackupFile(filePath, preparedData);
  }
}
