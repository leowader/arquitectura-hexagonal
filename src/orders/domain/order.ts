export class Order {
  orderId: number;
  total: number;
  productId: number;
  constructor(productId: number, total: number) {
    //VALIDAR LOS ATRIBUTOS DEL OBJETO QUE SE CREA
    this.orderId = 0;
    this.total = total;
    this.productId = productId;
  }
}
