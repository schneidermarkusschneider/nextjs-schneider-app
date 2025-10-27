export class SerializationHelper {
  processPluginCode(source: any): string {
    return source.code || '';
  }
}
