import mongoose from "mongoose";

const {dbUrl,dbname} = SERVER_CONFIG;

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

const db = mongoose.connect(dbUrl+dbname, mongooseOptions);

// handle connect
db.then(() => {
    console.log("Connection to DB");
}).catch(({message}) => {
    console.log(`Connection to DB ERROR: ${message}`);
})

export  default  db;