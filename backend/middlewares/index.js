import userController from "../controllers/user.controller.js"
import admin from "../config/firebaseConfig.js"


const getAuthToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
};

const auth = async (req, res, next) => {
  try {
    const authToken = getAuthToken(req);
    console.log(authToken)
    const userInfo = await admin.auth()
      .verifyIdToken(authToken);

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
    const is_premium = await userController.isUserPremium(req.email_id);
    if (is_premium) { next() }
    else {
      throw new Error('not premium')
    }
  } catch (error) {
    return res
      .status(401)
      .send({ error: 'You are not premium first But' });
  }
}

const isOwner = async (req, res, next) => {
  const { channel_id } = req.body
  try {
    const isOwner = await userController.isOwnerOfChannel(req.email_id, channel_id)
    if (isOwner) return next();
    else new Error('Unauthorized Access')
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .send({ error: "Unauthorized Access" });
  }
}

const isEditor = async (req, res, next) => {
  const { channel_id } = req.body
  try {
    const isEditor = await userController.isEditorOfChannel(req.email_id, channel_id)
    if (isOwner) return next();
    else new Error('Unauthorized Access')
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .send({ error: "Unauthorized Access" });
  }
}


export { auth, isPremium, isOwner, isEditor }