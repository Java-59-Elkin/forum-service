import Account from '../models/account.model.js';


class AccountRepository {
    async registerUser(userData) {
        const isExist = await Account.findOne({login: userData.login});
        if (!isExist) {
            const user = new Account(userData);
            return user.save();
        }
        return null;

    }

    // async loginUser(userData) {}

    async deleteUser(login) {
        const user = await Account.findOne({login});
        if (!user) {
            return null;
        }
        return Account.findByIdAndDelete(user._id);
    }

    async updateUser(login, data) {
        return Account.findOneAndUpdate({login}, data, {new: true});

    }

    async addRole(login, role) {
        return Account.findOneAndUpdate({login},{$push: {roles: role}}, {new: true});
    }

    async deleteRole(login, role) {
        return Account.findOneAndUpdate({login}, {$pull: {roles: role}}, {new: true});
    }

    async getUser(login) {
        return Account.findOne({login});
    }

}

export default new AccountRepository();