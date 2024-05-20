import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderService {
  private orderRepository: IOrderRepository; //APP=>DOMAIN
  //   inyectando dependencia
  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }
  public addOrder(productId: number, total: number): Order {
    const order: Order = new Order(productId, total);
    return this.orderRepository.addOrder(order);
  }
}
