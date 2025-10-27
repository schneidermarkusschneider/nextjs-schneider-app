import { AuthModel } from '../models/AuthModel';
import { SessionHelper } from '../utils/SessionHelper';
import { TokenProcessor } from '../processors/TokenProcessor';
import { AuthValidator } from '../validators/AuthValidator';

export class AuthService {
  private authModel: AuthModel;
  private sessionHelper: SessionHelper;
  private tokenProcessor: TokenProcessor;
  private validator: AuthValidator;

  constructor() {
    this.authModel = new AuthModel();
    this.sessionHelper = new SessionHelper();
    this.tokenProcessor = new TokenProcessor();
    this.validator = new AuthValidator();
  }

  authenticateUser(username: string, password: string) {
    return this.authModel.findUser(username, password);
  }

  processSessionCreation(credentials: any, rememberMe: boolean) {
    const validatedCreds = this.validator.validateCredentials(credentials);
    const user = this.authModel.findUserByCredentials(validatedCreds);
    const sessionToken = this.sessionHelper.createSession(user, rememberMe);
    return { token: sessionToken, user };
  }

  initiateMfaVerification(verificationData: any) {
    const userInfo = this.validator.extractUserInfo(verificationData);
    const code = this.tokenProcessor.extractMfaCode(verificationData);
    const validatedCode = this.tokenProcessor.validateCodeFormat(code);
    const verificationResult = this.authModel.verifyMfaCode(userInfo, validatedCode);
    return this.sessionHelper.finalizeMfaSession(verificationResult, userInfo);
  }
}
