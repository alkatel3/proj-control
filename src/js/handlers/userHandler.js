const sequelizeObject = require('../db');
const initModels = require('../models/init-models');
const sequelize = initModels(sequelizeObject);
const userModel = sequelize.user;

const userHandler = {
    async add(user) {
        const newuser = await userModel.create(user);
        return newuser.dataValues.id;
    },

    async get(id) {
        const user = await userModel.findByPk(id);
        return user;
    },

    async update(id, user) {
        await userModel.update(user, {
            where: { id }
        });
    },

    async delete(id) {
        await userModel.destroy({
            where: { id }
        });
    },

    async getAll() {
        const users = await userModel.findAll();
        return users;
    }
}

module.exports = userHandler;
