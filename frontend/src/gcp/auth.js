import { auth, provider } from "../conf/conf";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import apiService from "./data"


export class AuthService {

  // return - user or null 
  async login() {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result.user);
      return result.user;
    } catch (error) {
      console.log("Firebase Service :: login:: error", error);
      return null;
    }
  }

  // return formate - {email_id, icon_url} or null
  async getCurrentUser() {
    try {
      const currUser = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve(user)
          } else {
            reject(user)
          }
        });
      })
      if (!currUser) return null;
      const userData = {
        uid: currUser.uid,
        name: currUser.displayName,
        email_id: currUser.email,
        icon_url: currUser.photoURL,
        token: currUser.stsTokenManager.accessToken,
      };
      apiService.putAuthToken(userData.token);
      return userData;
    } catch (error) {
      console.log("Firebase Service :: getCurrentUser:: error", error);
      return null;
    }
  }

  getPaymentUrl() {
    return process.env.REACT_APP_PAYMENT_URL
  }

  // return formate - bool
  async logout() {
    try {
      const res = await signOut(auth)
      return res != null ? true : false;
    } catch (error) {
      console.log("Firebase Service :: logout:: error", error);
      return false;
    }
  }
}

const authService = new AuthService()
export default authService

