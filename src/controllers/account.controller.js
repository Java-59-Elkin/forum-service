import accountService from '../services/account.service.js';

class AccountController {
    async registerUser(req, res, next) {
        try {
            const user = await accountService.registerUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    // async loginUser(req, res, next) {}

    async deleteUser(req, res, next) {
        try {
            const user = await accountService.deleteUser(req.params.login);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await accountService.updateUser(req.params.login, req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async addRole(req, res, next) {
        try {
            const user = await accountService.addRole(req.params.login, req.params.role);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteRole(req, res, next) {
        try {
            const user = await accountService.deleteRole(req.params.login, req.params.role);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req, res, next) {
        try {
            const users = await accountService.getUsers(req.params.login);
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

}

export default new AccountController();