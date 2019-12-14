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

  create = async () =>{
    const data = await this.models.cat.create();
    return data;
  };

  update = async id => {
    const data = await this.models.cat.update(id);
    return data;
  };

  remove = async id => {
    const data = await this.models.cat.update(id);
    return data;
  };
}
export default CatController;
