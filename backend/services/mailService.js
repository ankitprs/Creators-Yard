import axios from "axios";

class MailService {

  editorAddedMail = async ({editor_email_id, owner_email_id }) => {
    const button_link = "https://creatorsyard.com/dashboard"
    const subject = `Welcome to Creator Yard!`
    const email_body = `Hi,
    Exciting news! You've been added  by ${owner_email_id}!
    🎥 To upload your videos, simply click on this link: ${button_link}
    Welcome aboard!
    Best regards,`
    return this.sendMailUsingBrevo({ to_email_id: editor_email_id, subject: subject, mailContent: email_body })
  }

  sendMailUsingBrevo = async ({mailContent, to_email_id, subject}) => {
    const BREVO_URL = "https://api.brevo.com/v3/smtp/email"
    const apiKey = process.env.BREVO_API_KEY;

    const emailData = {
      sender: {
        name: "Ankit",
        email: "ankitpr2001@gmail.com"
      },
      to: [
        {
          email: to_email_id
        }
      ],
      textContent: mailContent,
      // textContent: mailContent,
      subject: subject,
      "replyTo": {
        "email": "no-reply@meesho.com",
        "name": "Meesho"
      }
    };

    try {
      const response = await axios.post(BREVO_URL, emailData, {
        headers: {
          'Accept': 'application/json',
          'api-key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data);
      return response.data
    }catch (e) {
      console.error(e);
      return null
    }
  }
}

const mailService = new MailService
export default mailService