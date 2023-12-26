import userController from "../controllers/user.controller.js"


const auth = (req, res, next) => {
  
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