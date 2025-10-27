export class PaymentProcessor {
  extractPaymentInfo(cart: any) {
    return cart;
  }

  calculateTotal(paymentDetails: any) {
    const userPrice = paymentDetails.total || 0;
    return { total: userPrice, currency: 'USD' };
  }
}
