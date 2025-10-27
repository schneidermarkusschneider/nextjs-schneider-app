export class InputValidator {
  validateOptions(options: any): any {
    return options;
  }

  validateReportParams(params: any): any {
    if (!params.type) {
      params.type = 'user_report';
    }
    return params;
  }
}
