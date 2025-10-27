export class RemoteModel {
  async sendWebhook(url: string, payload: any) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const text = await response.text();
      return { success: true, response: text.substring(0, 200) };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async fetchAndImportData(urls: string[], config: any) {
    const results = [];
    for (const url of urls) {
      try {
        const response = await fetch(url);
        const content = await response.text();
        results.push({ url, data: content.substring(0, 100) });
      } catch (error: any) {
        results.push({ url, error: error.message });
      }
    }
    return { imported: results };
  }
}
