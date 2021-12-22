const userController = require("../controllers/userController");

const routes = [
  { path: "/user/add", method: "post", func: userController.add },
  { path: "/user/get/:id", method: "get", func: userController.get },
  { path: "/user/upd/", method: "put", func: userController.update },
  { path: "/user/del/:id", method: "delete", func: userController.delete },
  { path: "/user/getAll", method: "get", func: userController.getAll },
];

module.exports = routes;
