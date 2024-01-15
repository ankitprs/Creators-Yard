import { auth, provider } from "../conf/conf";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


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
      // const user = await auth.currentUser;
      onAuthStateChanged(auth, (user) => {
        if (user) {

          const uid = user.uid;
          console.log(`Users: -> ${(user.email).toString()}`);

        } else {

        }
      });

      // return {
      //   name: user.displayName,
      //   email_id: user.email,
      //   icon_url: user.photoURL,
      // };
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

