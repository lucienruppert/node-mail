import * as nodemailer from 'nodemailer';

export class MailService {
  private transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.webtar.hu',
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: 'hello@luciendelmar.com',
        pass: 'WTeQKeuK',
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'luciendelmar@gmail.com',
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully: ' + info.response);
    } catch (error) {
      console.log('Error sending email: ' + error);
    }
  }
}
