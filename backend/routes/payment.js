import express from 'express';
import PaymentController from '../controllers/payment.controller.js'


var router = express.Router();

router.post('/webhook/razorpay', PaymentController.razorpayWebhook);
router.post('/webhook/stripe', PaymentController.stripeWebhook);

export default router;
