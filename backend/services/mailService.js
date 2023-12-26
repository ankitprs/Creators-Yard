import nodemailer from "nodemailer";


class MailService {

  editorAddedMail = async ({ channel_name, owner_email_id, editor_email_id }) => {
    const button_link = "https://channelnest.com"
    const subject = `Welcome to ${channel_name}!`
    const email_body = `Hi,
    Exciting news! You've been added to ${channel_name} by ${owner_email_id}!
    🎥 To upload your videos, simply click on this link: ${button_link}
    Welcome aboard!
    Best regards,`
    return this.sendMail({ to: editor_email_id, subject: subject, body: email_body })
  }

  sendMail = async ({ to, subject, body }) => {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });

    let mailOptions = {
      from: `tomerpacific@gmail.com`,
      to: `tomerpacific@gmail.com`,
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };

    try {

      // send mail with defined transport object
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      console.log("Message sent: %s", info.messageId);
      return true;
    } catch (err) {
      console.log("Error " + err);
      return false;
    }
  }
}
const mailService = new MailService
export default mailService