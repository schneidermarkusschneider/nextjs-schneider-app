export class UpdateProcessor {
  async downloadUpdate(url: string): Promise<string> {
    try {
      const response = await fetch(url);
      return await response.text();
    } catch {
      return '';
    }
  }

  async fetchPluginSource(pluginData: any) {
    const pluginUrl = pluginData.source_url || '';
    if (pluginUrl) {
      return { code: await this.downloadUpdate(pluginUrl) };
    }
    return { code: pluginData.inline_code || '' };
  }
}
