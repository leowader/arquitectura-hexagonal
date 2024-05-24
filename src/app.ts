import express from "express";
import { orderRouter } from "./orders/infraestructure/routes/order.routes";
export const app = express();
app.use(express.json());


app.get("/", (_req, res) => {
  res.send({ data: "ok" });
});

app.use("/api/v1",orderRouter)
