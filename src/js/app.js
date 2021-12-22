const app = require('./server');
const sequelize = require('./db');

const router = require('./routes');
router(app);

(async () => {
  await sequelize.sync({ force: false });

  app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server started!`);
  });
})();
