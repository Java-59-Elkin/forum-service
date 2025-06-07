import accountRepository from "../repositories/account.repository.js";


class AccountService {
    async registerUser(data) {
            return await accountRepository.registerUser({ ...data})
    }

    async getLogin(name, email, password) {
        // TODO
    }

    async deleteUser(login, id) {
        // TODO
    }

    async updateUser(login, data) {
        // TODO
    }

    async addRole(login, data) {
        // TODO
    }

    async deleteRole(login, id) {
        // TODO
    }

    async changePassword(login, data) {
        // TODO
    }

    async getUsers(login) {
        // TODO
    }
}

export default new AccountService();