import mongoose from "mongoose";
import  fs from "fs";
import {ENVIROMENT_CONFIG}  from "configs/environment";

//dev  TODO: ПЕРЕДЕЛАТЬ
const dev_config = ENVIROMENT_CONFIG.development;

const mongooseOptions = {
    promiseLibrary:    global.Promise,
    poolSize:          3,
    keepAlive:         30000,
    connectTimeoutMS:  5000,
    reconnectTries:    Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser:   true,
    useFindAndModify:  false,
    useCreateIndex:    true,
};

const db = mongoose.connect(dev_config.db, mongooseOptions);
//hamdle connect
db.then(() => {
    console.log("Connection to DB");
}).catch(({message}) => {
    console.log(`Connection to DB ERROR: ${message}`);
})

export  default  db;