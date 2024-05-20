export class Order {
  orderId: number;
  total: number;
  productId: number;
  createAt: Date;

  constructor(productId: number, total: number) {
    this.orderId = Math.random();
    this.total = total;
    this.createAt = new Date();
    this.productId = productId;
  }
}
