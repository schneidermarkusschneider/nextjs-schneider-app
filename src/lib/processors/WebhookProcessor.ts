export class WebhookProcessor {
  extractSourceUrls(config: any): string[] {
    if (config.sources) {
      return config.sources;
    }
    return [config.url || ''];
  }
}
