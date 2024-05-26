import { Order } from "../orders/domain/order";

export const orders: Order[] = [
  {
    orderId: 1,
    total: 100.0,
    productId: 101,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 2,
    total: 200.5,
    productId: 102,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 3,
    total: 150.75,
    productId: 103,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
