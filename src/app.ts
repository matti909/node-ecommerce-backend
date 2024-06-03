import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dbConnect from "./config/mongo";
import swagger from "./docs/swagger";
import { router } from "./routes/";

const app: Application = express();
const PORT = process.env.PORT || 4000;

const options = {
  explorer: true,
};

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger, options));
app.use(router);
dbConnect()
  .then(() => console.log("DB CONNECTION READY"))
  .catch((err) => console.error(err));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
