const userHandler = require('../handlers/userHandler');

const userController = {
    async add(req, res) {
        const login = req.body.login;
        const password = req.body.password;
        const createdAt = req.body.createdAt;

        const newId = await userHandler.add({
            login,
            password,
            createdAt
        });

        res.status(201).send(`Add new user with id = ${newId}`);
    },

    async get(req, res) {
        const id = req.params.id;
        const user = await userHandler.get(id);
        res.status(200).send(user)
    },

    async update(req, res) {
        const id = req.body.id;
        const login = req.body.login;
        const password = req.body.password;
        const createdAt = req.body.createdAt;

        await userHandler.update(id, {
            login,
            password,
            createdAt
        });

        res.status(200).send(`Update user with id = ${id}`);
    },

    async delete(req, res) {
        const id = req.params.id;
        await userHandler.delete(id);
        res.status(200).send(`Delete user with id = ${id}`);
    },

    async getAll(req, res) {
        const users = await userHandler.getAll();
        res.status(200).send(users);
    }
}

module.exports = userController;
