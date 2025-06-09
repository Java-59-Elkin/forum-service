import accountRepository from "../repositories/account.repository.js";


class AccountService {
    async registerUser(data) {
        const user = await accountRepository.registerUser({ ...data});
        if(!user) {
            throw new Error("Conflict");
        }
        return user;
    }

    async getLogin(name, email, password) {
        // TODO
    }

    async deleteUser(login) {
        return await accountRepository.deleteUser(login);
    }

    async updateUser(login, data) {
        return await accountRepository.updateUser(login, data);
    }

    async addRole(login, role) {
        return await accountRepository.addRole(login, role);
    }

    async deleteRole(login, role) {
        return await accountRepository.deleteRole(login, role);
    }

    async changePassword(login, data) {
        // TODO
    }

    async getUsers(login) {
        return await accountRepository.getUser(login);
    }
}

export default new AccountService();