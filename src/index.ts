import { app } from "./app";
import "./config/config.env";

import { sequelize } from "./database/pg";
const PORT = 4000;
async function main() {
  try {
    console.log(process.env.PORT);

    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server runing on http://localhost:${process.env.PORT}`);
    });
    console.log("Conection has been established successfully in Postgres");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in connection in db Postgres", error.message);
    }
  }
}
main();
