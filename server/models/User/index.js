import BaseModel from "models/BaseModel";
// схема
import { userScheme } from "schemas";

// утилиты
import { generateJWT } from "helpers";
import { generateSalt, validatePassword, setPassword } from "./utils";

const USER_FIELDS = ["_id", "login", "token", "salt"];
const PASSWORD_SALT = "cGmVMbgHRj";

class UserModel extends BaseModel {
  constructor(data) {
    super(data);
  }
}
