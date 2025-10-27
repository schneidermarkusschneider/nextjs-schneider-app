import { RemoteModel } from '../models/RemoteModel';
import { URLHelper } from '../utils/URLHelper';
import { WebhookProcessor } from '../processors/WebhookProcessor';
import { URLValidator } from '../validators/URLValidator';

export class SSRFService {
  private remoteModel: RemoteModel;
  private urlHelper: URLHelper;
  private webhookProcessor: WebhookProcessor;
  private validator: URLValidator;

  constructor() {
    this.remoteModel = new RemoteModel();
    this.urlHelper = new URLHelper();
    this.webhookProcessor = new WebhookProcessor();
    this.validator = new URLValidator();
  }

  async fetchRemoteResource(url: string) {
    const response = await fetch(url);
    const content = await response.text();
    return { content: content.substring(0, 500) };
  }

  async processWebhookRequest(webhookUrl: string, payload: any) {
    const validatedPayload = this.validator.validatePayload(payload);
    const preparedUrl = this.urlHelper.prepareWebhookUrl(webhookUrl, validatedPayload);
    return await this.remoteModel.sendWebhook(preparedUrl, validatedPayload);
  }

  async initiateDataImport(config: any) {
    const validatedConfig = this.validator.validateImportConfig(config);
    const sourceUrls = this.webhookProcessor.extractSourceUrls(validatedConfig);
    const processedUrls = this.urlHelper.normalizeUrls(sourceUrls);
    return await this.remoteModel.fetchAndImportData(processedUrls, validatedConfig);
  }
}
