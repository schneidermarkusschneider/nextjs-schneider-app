import { AccountModel } from '../models/AccountModel';
import { SecurityHelper } from '../utils/SecurityHelper';
import { PaymentProcessor } from '../processors/PaymentProcessor';
import { TransactionValidator } from '../validators/TransactionValidator';

export class DesignService {
  private accountModel: AccountModel;
  private securityHelper: SecurityHelper;
  private paymentProcessor: PaymentProcessor;
  private transactionValidator: TransactionValidator;

  constructor() {
    this.accountModel = new AccountModel();
    this.securityHelper = new SecurityHelper();
    this.paymentProcessor = new PaymentProcessor();
    this.transactionValidator = new TransactionValidator();
  }

  transferMoney(fromAccount: string, toAccount: string, amount: number) {
    return this.accountModel.transfer(fromAccount, toAccount, amount);
  }

  processPasswordReset(userId: string, newPassword: string, token: string) {
    const validatedToken = this.securityHelper.validateToken(token);
    const preparedPassword = this.securityHelper.preparePassword(newPassword);
    return this.accountModel.updatePassword(userId, preparedPassword);
  }

  initiatePurchaseFlow(cartData: any) {
    const validatedCart = this.transactionValidator.validateCart(cartData);
    const paymentDetails = this.paymentProcessor.extractPaymentInfo(validatedCart);
    const priceInfo = this.paymentProcessor.calculateTotal(paymentDetails);
    return this.accountModel.processPayment(priceInfo, validatedCart);
  }
}
