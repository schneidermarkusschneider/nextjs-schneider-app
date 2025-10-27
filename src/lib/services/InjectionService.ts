import { DatabaseModel } from '../models/DatabaseModel';
import { CommandHelper } from '../utils/CommandHelper';
import { ReportProcessor } from '../processors/ReportProcessor';
import { InputValidator } from '../validators/InputValidator';

export class InjectionService {
  private dbModel: DatabaseModel;
  private commandHelper: CommandHelper;
  private reportProcessor: ReportProcessor;
  private validator: InputValidator;

  constructor() {
    this.dbModel = new DatabaseModel();
    this.commandHelper = new CommandHelper();
    this.reportProcessor = new ReportProcessor();
    this.validator = new InputValidator();
  }

  searchDatabase(query: string) {
    return this.dbModel.executeQuery(query);
  }

  processCommandRequest(commandData: string, options: any) {
    const validatedOptions = this.validator.validateOptions(options);
    const preparedCommand = this.commandHelper.prepareCommand(commandData, validatedOptions);
    return this.commandHelper.executeSystemCommand(preparedCommand);
  }

  initiateReportGeneration(params: any) {
    const validatedParams = this.validator.validateReportParams(params);
    const templateData = this.reportProcessor.loadTemplate(validatedParams);
    const queryResult = this.reportProcessor.buildQuery(templateData, validatedParams);
    return this.dbModel.executeComplexQuery(queryResult);
  }
}
