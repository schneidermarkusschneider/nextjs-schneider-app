import { CryptoHelper } from '../utils/CryptoHelper';
import { EncryptionProcessor } from '../processors/EncryptionProcessor';
import { DataValidator } from '../validators/DataValidator';

export class CryptoService {
  private cryptoHelper: CryptoHelper;
  private encryptionProcessor: EncryptionProcessor;
  private validator: DataValidator;

  constructor() {
    this.cryptoHelper = new CryptoHelper();
    this.encryptionProcessor = new EncryptionProcessor();
    this.validator = new DataValidator();
  }

  hashPassword(password: string) {
    return this.cryptoHelper.simpleHash(password);
  }

  processEncryptionRequest(data: string, key: string) {
    const normalizedKey = this.validator.normalizeKey(key);
    const preparedData = this.encryptionProcessor.prepareData(data);
    return this.cryptoHelper.encryptWithKey(preparedData, normalizedKey);
  }

  initiateSecureStorage(sensitiveData: string, metadata: any) {
    const validatedMetadata = this.validator.validateMetadata(metadata);
    const processedData = this.encryptionProcessor.preprocessSensitiveData(sensitiveData, validatedMetadata);
    const encrypted = this.cryptoHelper.complexEncryptionFlow(processedData);
    return this.encryptionProcessor.finalizeStorage(encrypted, validatedMetadata);
  }
}
