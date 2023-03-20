import express from "express";
import cors from "cors";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";


const app = express();

app.use(cors());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

try {
  app.listen(3030, () => {
    console.log("Server started");
  });
} catch (error) {
  console.error(error);
}

export default app;