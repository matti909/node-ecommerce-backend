import cors from "cors";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import dbConnect from "./config/mongo";
import { router } from "./routes/";
import swagger from "./docs/swagger";

const app = express();
const PORT = process.env.PORT || 4000;

const options = {
  explorer: true,
};

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger, options));
app.use(router);
dbConnect()
  .then(() => console.log("DB CONNECTION READY"))
  .catch((err) => console.error(err));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
