/**
 * Функция заливает объект полями на основе массива полей
 * @param data - ключевой объект
 * @param props - поля которые нужно собрать
 */
const dataFiller = (data, props) => {
  const filled = {};
  props.forEach(prop => {
    filled[prop] = data[prop];
  });
  return filled;
};
export default dataFiller;
