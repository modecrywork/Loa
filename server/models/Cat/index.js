import { catScheme } from "schemas";

export class CatModel {
  constructor(data) {
    this.data = data;
  }

  _formatCat = data =>
    data.map(cat => {
      return {
        _id: cat._id,
        name: cat.name,
        favorite: cat.favorite,
        age: cat.age,
        created: cat.created
      };
    });

  read = async () => {
    const source = await catScheme.find({}).lean();
    const data = this._formatCat(source);
    return data;
  };
}

export default CatModel;
