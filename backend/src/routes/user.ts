import express from 'express';
import { createUser, getUser } from '../controllers/user.controller'
import { auth, isEditor, isOwner, isPremium } from '../middlewares';
import { Request, Response } from 'express';


const router = express.Router();


router.get('/is_premium', auth, isPremium, function (req, res) {
  res.send({ isPremium: true });
});

router.post('/add_user', async (req: Request, res: Response) => {
  try {
    const { email_id } = req.body;
    const newUser = await createUser(email_id)

    res.status(201).json(newUser);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
})
router.get('/get_user', auth, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers;
    const user = await getUser(email_id as string)

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
})

export default router;
