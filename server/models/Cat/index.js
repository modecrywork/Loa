import BaseModel from "models/BaseModel";
// схемы
import { catScheme } from "schemas";

const CAT_FIELDS = ["_id", "name", "favorite", "age", "created"];

class CatModel extends BaseModel {
  constructor(data) {
    super(data);
    this.fields = [CAT_FIELDS];
    this.schemas = { defaultScheme: catScheme };
  }
}

export default CatModel;
