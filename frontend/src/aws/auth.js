import conf from '../conf/conf'
const paymentURL = "https://buy.stripe.com/test_28o9BdgGYbFQfMkcMM"



export class AuthService {

  constructor() { }

  async createAccount({ email, password, name }) {
    try {
      // const userAccount = await this.account.create(ID.unique(), email, password, name)
      // if (userAccount) {
      //   // call another method
      //   return this.login({ email, password })
      // } else {
      //   return userAccount;
      // }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password)

    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    return null;

    const user = {
      email_id: "ankitprasad.119@gmail.com",
      icon_url: ""
    }
    return user;
    try {
      return
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser:: error", error);
    }
    return null;
  }


  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService()
export default authService

