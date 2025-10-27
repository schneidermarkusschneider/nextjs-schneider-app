import { IntegrityModel } from '../models/IntegrityModel';
import { SerializationHelper } from '../utils/SerializationHelper';
import { UpdateProcessor } from '../processors/UpdateProcessor';
import { IntegrityValidator } from '../validators/IntegrityValidator';

export class IntegrityService {
  private integrityModel: IntegrityModel;
  private serializationHelper: SerializationHelper;
  private updateProcessor: UpdateProcessor;
  private validator: IntegrityValidator;

  constructor() {
    this.integrityModel = new IntegrityModel();
    this.serializationHelper = new SerializationHelper();
    this.updateProcessor = new UpdateProcessor();
    this.validator = new IntegrityValidator();
  }

  deserializeObject(data: string) {
    const decoded = Buffer.from(data, 'base64').toString();
    const obj = eval(`(${decoded})`);
    return { deserialized: String(obj) };
  }

  async processSoftwareUpdate(updateUrl: string, checksum: string) {
    const validatedUrl = this.validator.validateUrl(updateUrl);
    const updateContent = await this.updateProcessor.downloadUpdate(validatedUrl);
    return this.integrityModel.applyUpdate(updateContent, checksum);
  }

  async initiatePluginInstallation(pluginData: any) {
    const validatedPlugin = this.validator.validatePluginData(pluginData);
    const pluginSource = await this.updateProcessor.fetchPluginSource(validatedPlugin);
    const processedCode = this.serializationHelper.processPluginCode(pluginSource);
    return this.integrityModel.installAndExecutePlugin(processedCode, validatedPlugin);
  }
}
