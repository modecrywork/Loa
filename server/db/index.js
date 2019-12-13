import mongoose from "mongoose";

const { dbUrl, dbName } = SERVER_CONFIG;

const mongooseOptions = {
  promiseLibrary: global.Promise,
  poolSize: 3,
  keepAlive: 30000,
  connectTimeoutMS: 5000,
  reconnectTries: Number.MAX_SAFE_INTEGER,
  reconnectInterval: 5000,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
};

const db = mongoose.connect(dbUrl + dbName, mongooseOptions);

// handle connect
db.then((state) => {
  console.log(`Connected to DB: ${dbUrl + dbName}`);
}).catch(({ message }) => {
  console.log(`Connection to DB ERROR: ${message}`);
});

export default db;
