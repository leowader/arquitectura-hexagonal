import { Order } from "../orders/domain/order";

export const orders: Order[] = [
  {
    orderId: 1,
    total: 100.0,
    productId: 101,
    createAt: new Date("2023-01-01T10:00:00"),
  },
  {
    orderId: 2,
    total: 200.5,
    productId: 102,
    createAt: new Date("2023-01-02T11:30:00"),
  },
  {
    orderId: 3,
    total: 150.75,
    productId: 103,
    createAt: new Date("2023-01-03T14:20:00"),
  },
];
