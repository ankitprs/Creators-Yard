import { isEditorOfChannel, isOwnerOfChannel, isUserPremium } from "../controllers/user.controller"
import admin from "../config/firebaseConfig"
import { Request, Response, NextFunction } from "express";


const getAuthToken = async (req: Request) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1];
  } else {
    return null
  }
};

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`call from this -> ${req}`);
    const authToken = await getAuthToken(req);

    if (authToken == null)
      return new Error("Unauthorized User")

    const userInfo = await admin.auth()
      .verifyIdToken(authToken);

    console.log(`user called : - ${userInfo.email}`);
    req.headers.email_id = userInfo.email
    return next()
  } catch (error) {
    return res
      .status(401)
      .send({ error: 'You are not authorized to make this request' });
  }
}


const isPremium = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email_id } = req.headers
    const is_premium = await isUserPremium(email_id as string);
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

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  let { channel_id } = req.body
  if (!channel_id) {
    channel_id = req.query.channel_id
  }
  try {
    const isOwner = await isOwnerOfChannel(req.headers.email_id as string, channel_id)
    if (isOwner) return next();
    else new Error('Unauthorized Access')
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .send({ error: "Unauthorized Access" });
  }
}

const isEditor = async (req: Request, res: Response, next: NextFunction) => {
  const { channel_id } = req.body
  try {
    const isEditor = await isEditorOfChannel(req.headers.email_id as string, channel_id)
    if (isEditor) return next();
    else new Error('Unauthorized Access')
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .send({ error: "Unauthorized Access" });
  }
}


export { auth, isPremium, isOwner, isEditor }