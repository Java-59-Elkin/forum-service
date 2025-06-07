import Account from '../models/account.model.js';

class AccountRepository {
    async registerUser(userData) {
        const user = new Account(userData);
        return user.save();
    }

}

export default new AccountRepository();