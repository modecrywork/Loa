import crypto from "crypto";

/**
 *  Генерирует хэш пароля
 * @param password - передаваемый пароль
 * @param salt - соль для генерации хэша
 * @returns {string} - возвращаем хэш в виде строки
 */
export const setPassword = (password,salt) => {
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");
  return hash;
};

/**
 *  Генерирует хэш пароля и сравнивает с передаваемым хэшом
 * @param hash - передаваемый хэш
 * @param currentPassword  - передаваемый пароль
 * @param salt  - соль для генерации хэша
 * @returns {boolean} - возвращает результат сравнения
 */
export const validatePassword = (hash,currentPassword,salt) => {
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");
  return hash === currentPassword;
};
