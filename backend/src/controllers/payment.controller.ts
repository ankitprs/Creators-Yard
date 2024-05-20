import { prisma } from '../config/prismaClient';

import dotenv from 'dotenv'
dotenv.config()



const makeUserCreatorPro = async (user_email_id: string, till_date: string) => {
  // try {
  //   const result = await User.updateOne({ email_id: user_email_id }, { plan_valid_till: till_date, is_premium: true })
  //   return result;
  // } catch (err) {
  //   console.log(err);
  //   return null;
  // }
}

const razorpayWebhook = async (req: Request, res: Response) => {
  // const payload = JSON.stringify(req.body).replace(/\//g, "\\/")

  // // Verify the webhook signature
  // const isValidSignature = validateWebhookSignature(payload, import.meta.env.RAZORPAY_WEBHOOK_SIGNATURE, import.meta.env.RAZORPAY_WEBHOOK_SECRET)


  // if (!isValidSignature) {
  //   // Invalid signature, do not process the webhook
  //   return res.status(400).send('Invalid signature');
  // }

  // // Retrieve the email ID and last date of the subscription
  // const email = payload.subscription.customer.email;
  // const lastDate = payload.subscription.current_end;

  // const result = await makeUserCreatorPro(email, lastDate)
  // console.log(`webhook result : ${result}`);
  // res.sendStatus(200);
}

export { razorpayWebhook };