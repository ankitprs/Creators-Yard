import express from 'express';
import PaymentController from '../controllers/payment.controller.js'


var router = express.Router();

router.post('/webhook/razorpay', PaymentController.razorpayWebhook);

export default router;
