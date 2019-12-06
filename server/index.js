import express from "express";
import path from "path";
//helpers
import {InitEnvironment} from "helpers";
// additional
import bodyParser from "body-parser";
import cors from "cors";

// INIT GLOBAL
InitEnvironment();

// server
const publicFolder = path.resolve(__dirname, "./public");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(publicFolder));

app.listen(SERVER_CONFIG.port, () => console.log(`Server start on: ${SERVER_CONFIG.port}`));
