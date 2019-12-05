import express from  "express";
import bodyParser from "body-parser";
import path from "path";

const app  = express();

app.use(bodyParser.json());

app.listen(3001,()=>console.log("Server runing on 3001"))