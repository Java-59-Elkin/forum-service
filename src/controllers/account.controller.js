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

}

export default new AccountController();