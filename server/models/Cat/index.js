import { catScheme } from "schemas";
import { dataFiller } from "helpers";

const CAT_FIELDS = ["_id", "name", "favorite", "age", "created"];

class CatModel {
  constructor(data) {
    this.data = data;
  }

  _formatCat = data => {
    if (Array.isArray(data)) {
      return data.map(item => {
        return dataFiller(item, CAT_FIELDS);
      });
    } else {
      return dataFiller(data, CAT_FIELDS);
    }
  };

  read = async () => {
    const source = await catScheme.find({}).lean();
    const data = this._formatCat(source);
    return data;
  };

  create = async () => {
    const source = await catScheme.create(this.data);
    const data = this._formatCat(source);
    return data;
  };

  update = async id => await catScheme.deleteOne({ _id: id }, this.data);
  remove = async id => await catScheme.deleteOne({ _id: id }, this.data);
}

export default CatModel;
