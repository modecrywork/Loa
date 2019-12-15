import { dataFiller } from "helpers";
/**
 * Класс реализующий базовую работу модели по C.R.U.D
 * @param data - данные с контроллера (запроса)
 * @param fields - двумеррный массив полей требуемый для форматирования
 * @param shemas - объект со схемами
 */
class BaseModel {
  constructor(data) {
    this.data = data;
    this.fields = [];
    this.schemas = { defaultScheme: {} };
  }

  // форматирует данные для контроллера
  _formatData = data => {
    if (Array.isArray(data)) {
      return data.map(item => dataFiller(item, this.fields[0]));
    }
    return dataFiller(data, this.fields[0]);
  };

  read = async schemeName => {
    let scheme = this.schemas.defaultScheme;
    if (schemeName) scheme = this.schemas[schemeName];

    const source = await scheme.find({}).lean();
    return this._formatData(source);
  };

  create = async schemeName => {
    let scheme = this.schemas.defaultScheme;
    if (schemeName) scheme = this.schemas[schemeName];

    const source = await scheme.create(this.data);
    return this._formatData(source);
  };

  update = async (id, schemeName) => {
    let scheme = this.schemas.defaultScheme;
    if (schemeName) scheme = this.schemas[schemeName];

    return await scheme.findOne({ _id: id }, this.data);
  };

  remove = async (id, schemeName) => {
    let scheme = this.schemas.defaultScheme;
    if (schemeName) scheme = this.schemas[schemeName];

    return await scheme.deleteOne({ _id: id }, this.data);
  };
}

export default BaseModel;
