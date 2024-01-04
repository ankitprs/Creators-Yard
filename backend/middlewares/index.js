import userController from "../controllers/user.controller.js"
// import admin from "../config/firebaseConfig.js"

const auth = async (req, res, next) => {
  // try {
  //   const { authToken } = req;
  //   const userInfo = await admin.auth()
  //     .verifyIdToken(authToken);
  //   req.authId = userInfo.uid;
  //   return next()
  // } catch (error) {
  //   return res
  //     .status(401)
  //     .send({ error: 'You are not authorized to make this request' });
  // }
  next()
}


const isPremium = (req, res, next) => {
  next()
}

const isOwner = (req, res, next) => {
  next()

}

const isEditor = (req, res, next) => {
  next()
}

export { auth, isPremium, isOwner, isEditor }