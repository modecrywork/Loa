import { cat } from "schemas";

export class CatModel {
  constructor(data) {
    this.data = data;
  }

  _formatCat = cat => {
    return {
      _id: cat.id,
      name: cat.name,
      age: cat.age,
      created: cat.created
    };
  };

  read = async () => {
    const source = await cat.find({}).sort({ created: -1 }).lean;
    return data.map(this._formatCat);
  };
}

export default CatModel;
