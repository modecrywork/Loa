import jwt from "jsonwebtoken";
/**
 * Функция генерирует JWT token на основе модели
 * @param model - модель на основе которой генерится токен
 */
const generateJWT = model => {
  return jwt.sign(model, "secret");
};

export default generateJWT;
