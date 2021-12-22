const app = require('./server');
const sequelize = require('./db');

(async () => {
  await sequelize.sync({ force: false });

  app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server started!`);
  });
})();
