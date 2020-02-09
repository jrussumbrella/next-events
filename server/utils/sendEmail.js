const nodemailer = require("nodemailer");

async function sendEmail(options) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL, // generated ethereal user
        pass: process.env.SMTP_PASSWORD // generated ethereal password
      }
    });

    console.log(
      process.env.SMTP_HOST,
      process.env.SMTP_EMAIL,
      process.env.SMTP_PASSWORD
    );

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // sender address
      to: options.email, // list of receivers
      subject: options.subject, // Subject line
      text: options.message // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendEmail;
