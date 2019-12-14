// GLOBAL CONFIG INIT
import path from "path";

import { initEnvironment, initRouters } from "helpers";

// db connection
import  "db";

// main
import express from "express";

// additional
import bodyParser from "body-parser";
import cors from "cors";

// routes
import routers from "routers";

// server
const publicFolder = path.resolve(__dirname, "./public");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(publicFolder));

initRouters(app, routers);

app.listen(SERVER_CONFIG.port, () =>
  console.log(`Server start on: ${SERVER_CONFIG.port}`)
);
