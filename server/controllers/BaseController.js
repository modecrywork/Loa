/**
 * Базовый класс для работы с контроллерами по C.R.U.D
 * @param data - данные из запроса
 * @param models - объект моделей
 */
class BaseController {
  constructor(data) {
    this.data = data;
    this.models = {defaultModel: {}};
  }

  read = async () => await this.models.defaultModel.read();

  create = async () => await this.models.defaultModel.create();

  update = async id => await this.models.defaultModel.update(id);

  remove = async id => await this.models.defaultModel.remove(id);
}

export  default  BaseController;