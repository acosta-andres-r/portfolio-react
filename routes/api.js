const router = require("express").Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

router.get("/email", (req, res) => {

  const userInfo = JSON.parse(req.query.i)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: 'acosta.andres.r@gmail.com',
    subject: 'Sent Email from Portfolio',
    text: `
    First Name: ${userInfo.first}
    Last Name: ${userInfo.last}
    Email: ${userInfo.email}
    Message: ${userInfo.textarea}
    `,
    html: `
    <p><strong>First Name: </strong> ${userInfo.first} </p>
    <p><strong>Last Name: </strong> ${userInfo.last} </p>
    <p><strong>Email: </strong> ${userInfo.email} </p>
    <p><strong>Message: </strong> ${userInfo.textarea} </p>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(error.responseCode).json("Something went wrong!")
    } else {
      console.log('Email sent: ' + info.response);

      // respond
      res.json("Message Sent Successfully!")
    }
  });

});

module.exports = router;
