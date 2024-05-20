// import SibApiV3Sdk from 'sib-api-v3-sdk'
import dotenv from 'dotenv'
dotenv.config()

// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = import.meta.env.BREVO_API_KEY

class MailService {

  editorAddedMail = async (editor_email_id: string, owner_email_id: string) => {
    const button_link = "https://creatorsyard.com/dashboard"
    const subject = `Welcome to Creator Yard!`
    const email_body = `
    Exciting news! You've been added  by ${owner_email_id}!
    🎥 To upload your videos, simply click on this link: ${button_link}
    Welcome aboard!
    Best regards,`
    return this.sendMailUsingBrevo(email_body, editor_email_id, subject)
  }

  sendMailUsingBrevo = async (mailContent: string, to_email_id: string, subject: string) => {

    // var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    // const sender = {
    //   email: "support@creatorsyard.com",
    //   name: "support"
    // }

    // const receivers = [
    //   {
    //     email: to_email_id,
    //     name: to_email_id
    //   }
    // ]

    // try {
    //   var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    //   sendSmtpEmail = {
    //     sender,
    //     to: receivers,
    //     subject: subject,
    //     textContent: "testing content",
    //     htmlContent: `<html><head></head><body><p>Hello,</p>${mailContent}</p></body></html>`
    //   }
    //   const sendEmail = await apiInstance.sendTransacEmail(sendSmtpEmail)
    //   return sendEmail
    // } catch (error) {
    //   return error;
    // }
  }
}

const mailService = new MailService
export default mailService