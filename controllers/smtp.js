const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  //   service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async (req, res) => {
  const data = req.body;
  console.log(req);
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: data.to,
      subject: data.subject,
      text: data.desc,
    });

    console.log("Message sent: %s", info.messageId);
    res.json({ message: info.messageId });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
};
module.exports = sendMail;
