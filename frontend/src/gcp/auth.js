import conf from '../conf/conf'
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const paymentURL = "https://buy.stripe.com/test_28o9BdgGYbFQfMkcMM"

export class AuthService {

  auth = null

  // constructor() {
  //   this.auth = getAuth();
  // }

  async login() {
    try {
      const provider = new GoogleAuthProvider()
      signInWithPopup(this.auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    // if (!this.auth) return null
    // const user = this.auth.currentUser;
    // if (user) {
    //   return user;
    // } else {
    //   return null;
    // }

    // const user = {
    //   email_id: "ankitprasad.119@gmail.com",
    //   icon_url: ""
    // }
    // return user;
    // try {
    //   return
    // } catch (error) {
    //   console.log("Appwrite Service :: getCurrentUser:: error", error);
    // }
    return null;
  }


  async logout() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}

const authService = new AuthService()
export default authService

