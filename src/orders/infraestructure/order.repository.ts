import { orders } from "../../database/db";
import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderRepositoryMemory implements IOrderRepository {
  public async getOrders(): Promise<Order[]> {
    return await orders;
  }
  public async addOrder(order: Order): Promise<Order> {
    orders.push(order);
    return order;
  }
}
