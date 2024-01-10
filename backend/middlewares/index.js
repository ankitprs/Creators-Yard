import userController from "../controllers/user.controller.js"
import admin from "../config/firebaseConfig.js"

const auth = async (req, res, next) => {
  try {
    const { authToken } = req;
    const userInfo = await admin.auth()
      .verifyIdToken(authToken);
    req.authId = userInfo.uid;
    req.email_id = userInfo.email_id

    return next()
  } catch (error) {
    return res
      .status(401)
      .send({ error: 'You are not authorized to make this request' });
  }
}


const isPremium = async (req, res, next) => {
  try {
    const is_premium = await userController.isUserPremium(req, res);
  } catch (error) {
    
  }
  next()
}

const isOwner = (req, res, next) => {
  next()

}

const isEditor = (req, res, next) => {
  next()
}

export { auth, isPremium, isOwner, isEditor }