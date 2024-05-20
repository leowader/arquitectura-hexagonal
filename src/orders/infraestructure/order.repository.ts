import { orders } from "../../database/db";
import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderRepository implements IOrderRepository {
  public async addOrder(order: Order): Promise<Order> {
    orders.push(order);
    return order;
  }
  public async getAllsOrders(): Promise<Order[]> {
    return orders;
  }
}
