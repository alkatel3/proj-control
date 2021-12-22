const routes = require('./router.js');

const initRoutes = (app) => {
  for (const route of routes) {
    app[route.method](route.path, route.func);
  }
}

module.exports = initRoutes;
