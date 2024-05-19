import express from "express";
const app = express();
app.use(express.json());
const PORT = 4000;
app.get("/", (_req, res) => {
  res.send({ data: "ok" });
});
app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${process.env.PORT}`);
});
