import express from 'express';
import { Request, Response } from 'express';
import { newPremiumSubscription } from '../controllers/user.controller'


const router = express.Router();

router.post('/webhook/lemonsqueezy', async (req: Request, res: Response) => {
  const currentDate = new Date()
  const date30DaysLater = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
  await newPremiumSubscription("ankitprasad.119@gmail.com", currentDate, date30DaysLater)
  res.json({ status: 200 })
});

export default router;
