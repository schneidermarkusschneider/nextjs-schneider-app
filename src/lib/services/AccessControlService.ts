import { UserModel } from '../models/UserModel';
import { PermissionHelper } from '../utils/PermissionHelper';
import { ClaimProcessor } from '../processors/ClaimProcessor';

export class AccessControlService {
  private userModel: UserModel;
  private permissionHelper: PermissionHelper;
  private claimProcessor: ClaimProcessor;

  constructor() {
    this.userModel = new UserModel();
    this.permissionHelper = new PermissionHelper();
    this.claimProcessor = new ClaimProcessor();
  }

  getUserData(userId: string) {
    return this.userModel.fetchById(userId);
  }

  processUserListRequest(role: string) {
    const filteredData = this.permissionHelper.filterUsersByRole(role);
    return this.userModel.retrieveMultiple(filteredData);
  }

  initiateDocumentRetrieval(docId: string, userClaims: string) {
    const processedClaims = this.claimProcessor.parseClaims(userClaims);
    const validatedAccess = this.permissionHelper.checkDocumentAccess(docId, processedClaims);
    return this.userModel.getDocumentWithValidation(docId, validatedAccess);
  }
}
