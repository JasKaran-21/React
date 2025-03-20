import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {  // destructuring the parameters
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {                     // if userAccount exist.
                // call another method. 
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("AuthService :: login :: error", error);
            // throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AuthService :: getcurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AuthService :: logout :: error", error);
            // throw error;
        }
    }
}

const authService = new AuthService();  // create object of AuthService class and eport it.

export default authService;