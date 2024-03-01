import express from 'express';
import UserController from '../controllers/user.controller.js'
import { auth, isEditor, isOwner, isPremium } from '../middlewares/index.js';


const router = express.Router();


router.get('/is_premium', auth, isPremium, function (req, res) {
  res.send({ isPremium: true });
});

router.post('/add_user', UserController.createUser)
router.get('/get_user', auth, UserController.getUser)

export default router;
