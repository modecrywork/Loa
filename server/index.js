// GLOBAL CONFIG INIT
import { InitEnvironment } from "helpers";

// db connection
 import db from "db";

// main
import express from "express";
import path from "path";

// additional
import bodyParser from "body-parser";
import cors from "cors";

// server
const publicFolder = path.resolve(__dirname, "./public");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(publicFolder));

app.listen(SERVER_CONFIG.port, () =>
  console.log(`Server start on: ${SERVER_CONFIG.port}`)
);
