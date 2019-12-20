import BaseController from "controllers/BaseController";
// models
import { UserModel } from "models";

class UserController extends BaseController {
  constructor(data) {
    super(data);
    this.models = {
      defaultModel: new UserModel(data)
    };
  }

  create = async () => {
    return await this.models.defaultModel.createUser();
  };

  validate = async () => {
    return await this.models.defaultModel.validate();
  };
}

export default UserController;
