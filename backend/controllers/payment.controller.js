import User from '../models/user.model.js';
import { validateWebhookSignature } from 'razorpay/dist/utils/razorpay-utils.js';

import dotenv from 'dotenv'
dotenv.config()

class PaymentController {

  constructor() {

  }

  makeUserCreatorPro = async (user_email_id, till_date) => {
    try {
      const result = await User.updateOne({ email_id: user_email_id }, { plan_valid_till: till_date, is_premium: true })
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  razorpayWebhook = async (req, res) => {
    const payload = JSON.stringify(req.body).replace(/\//g, "\\/")

    // Verify the webhook signature
    const isValidSignature = validateWebhookSignature(payload, process.env.RAZORPAY_WEBHOOK_SIGNATURE, process.env.RAZORPAY_WEBHOOK_SECRET)


    if (!isValidSignature) {
      // Invalid signature, do not process the webhook
      return res.status(400).send('Invalid signature');
    }

    // Retrieve the email ID and last date of the subscription
    const email = payload.subscription.customer.email;
    const lastDate = payload.subscription.current_end;

    const result = await makeUserCreatorPro(email, lastDate)
    console.log(`webhook result : ${result}`);
    res.sendStatus(200);
  }
}
const paymentController = new PaymentController;
export default paymentController;