import BaseModel from "models/BaseModel";
// схема
import { userScheme } from "schemas";

// утилиты
import { generateJWT } from "helpers";

import { generateSalt, validatePassword, setPassword } from "./utils";

const USER_FIELDS = ["_id", "login", "token", "salt", "hash"];

class UserModel extends BaseModel {
  constructor(data) {
    super(data);
    this.fields = [USER_FIELDS];
    this.schemas = { defaultScheme: userScheme };
  }

  createUser = async () => {
    const { login, password } = this.data;
    const salt = generateSalt();
    const hash = setPassword(password, salt);
    this.data = { login, salt, hash };
    this.data.token = generateJWT(this.data);
    return await this.create();
  };

  validate = async () => {
    const { password, login } = this.data;
    const foundUser = await this.read({ login });
    if (foundUser.length) {
      const user = foundUser[0];
      return (
        validatePassword(user.hash, password, user.salt) && user.login === login
      );
    }
    return "user not found";
  };
}
export default UserModel;
