export class Order {
  orderId: number;
  total: number;
  productId: number;
  createAt: Date;
  constructor(productId: number, total: number) {
    //VALIDAR LOS ATRIBUTOS DEL OBJETO QUE SE CREA
    this.orderId = Math.random();
    this.total = total;
    this.createAt = new Date();
    this.productId = productId;
  }
}
