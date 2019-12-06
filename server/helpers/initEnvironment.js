import  {ENVIROMENT_CONFIG} from "configs/environment";

const environment = process.env.NODE_ENV || 'development';

export const InitEnvironment = () =>{
    global.SERVER_CONFIG =  ENVIROMENT_CONFIG[environment];
}
