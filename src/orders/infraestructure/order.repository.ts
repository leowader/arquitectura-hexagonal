import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderRepository implements IOrderRepository {
  public addOrder(order: Order): Order {
    return new Order(10, 1000);
  }
}
