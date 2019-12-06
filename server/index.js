import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const publicFolder = path.resolve(__dirname, "./public");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(publicFolder));

app.listen(3001, () => console.log("Server runing on 3001"));
