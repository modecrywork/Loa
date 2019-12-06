import express from "express";
import path from "path";
// additional
import bodyParser from "body-parser";
import cors from "cors";
// configs
import {ENVIROMENT_CONFIG} from "./configs/environment";

//environment
const isDev = process.env.NODE_ENV === "development";

// server
const ServerConfig = isDev ? ENVIROMENT_CONFIG.development : ENVIROMENT_CONFIG.production;
const publicFolder = path.resolve(__dirname, "./public");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(publicFolder));

app.listen(ServerConfig.port, () => console.log(`Server start on: ${ServerConfig.port}`));
