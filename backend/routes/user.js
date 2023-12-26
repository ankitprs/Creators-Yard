import express from 'express';
// import UserController from '../controllers/user.controller.js'
import { auth, isEditor, isOwner, isPremium } from '../middlewares/index.js';


const router = express.Router();

/* GET users listing. */
router.get('/is_premium', isPremium, function (req, res) {
  res.send({ isPremium: true });
});

router.get('/payments', function (req, res) {

})

export default router;
