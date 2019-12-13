// GLOBAL CONFIG INIT
import path from "path";

import { InitEnvironment } from "helpers";

// main
import express from "express";

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
