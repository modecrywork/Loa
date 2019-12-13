import mongoose from "mongoose";

const { dbUrl, dbName } = SERVER_CONFIG;
const dbAddres = dbUrl + dbName;
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

mongoose
  .connect(dbAddres, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to DB: ${dbAddres}`);
  })
  .catch(({ message }) => {
    console.log(`Connection to DB ERROR: ${message}`);
  });
