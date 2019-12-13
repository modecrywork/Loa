/*
    Функция которая определяет пути для роутеров

    @param app - сервер
    @param routers - массив обхектов роутинга для иницилизации
 */
const initRouters = (app, routers) => {
  routers.forEach(({ path, route }) => {
    app.use(path, route);
  });
};

export default initRouters;
