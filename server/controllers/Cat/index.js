import BaseController from "controllers/BaseController";
// models
import { CatModel } from "models";

class CatController extends BaseController {
  constructor(data) {
    super(data);
    this.models = {
      defaultModel: new CatModel(data)
    };
  }
}

export default CatController;
