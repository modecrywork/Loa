import { CatModel } from "models";

class CatController {
  constructor(data) {
    this.models = {
      cat: new CatModel(data)
    };
  }

  read = async () => {
    const data = await this.models.cat.read();
    return data;
  };
}
export default CatController;
