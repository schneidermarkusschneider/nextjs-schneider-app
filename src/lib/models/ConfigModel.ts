export class ConfigModel {
  private settings: Record<string, any>;

  constructor() {
    this.settings = {
      app_name: 'VulnApp',
      version: '1.0.0',
      secret_key: 'super-secret-key-12345',
      database_url: 'postgresql://admin:password123@localhost/vulndb',
      api_key: 'sk-1234567890abcdef',
      debug: true,
      allowed_hosts: '*'
    };
  }

  getAllSettings() {
    return this.settings;
  }

  getDebugInfo() {
    return this.settings;
  }
}
