import express from 'express';
import userRouter from './user'
import videoRouter from './video'
import channelRouter from './channel'
import paymentRouter from './payment'


const router = express.Router();

router.use('/user', userRouter);
router.use('/video', videoRouter);
router.use('/channel', channelRouter);
router.use('/payment', paymentRouter)

export default router;
