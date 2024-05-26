export class Order {
  orderId: number;
  total: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(productId: number, total: number) {
    //VALIDAR LOS ATRIBUTOS DEL OBJETO QUE SE CREA
    this.orderId = 0;
    this.total = total;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.productId = productId;
  }
}
