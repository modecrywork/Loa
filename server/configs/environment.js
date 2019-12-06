import appConfig from "../../app-config.json";

const {production, development} = appConfig;

export const ENVIRONMENT_CONFIG = {
    production:{
        port: production.port
    },
    development:{
        port: development.port,
        db: "mongodb://127.0.0.1:27017/",
        dbName:"loa"
    }
};

