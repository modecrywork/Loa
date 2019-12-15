import { ENVIRONMENT_CONFIG } from "configs/environment";

const environment = process.env.NODE_ENV || "development";

global.SERVER_CONFIG = ENVIRONMENT_CONFIG[environment];
