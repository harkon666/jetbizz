export default function (req, res) {
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: 'mail.jetbizzaviation.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PSWD, // generated ethereal password
    },
  });

  let info = transporter.sendMail({
    from: `"${req.body.name}" <${process.env.EMAIL}>`, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: `Pertanyaan dari ${req.body.name}`, // Subject line
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.description}</p>`, // html body
  }, (err, info) => {
    if (err) {
      console.log(err, 'error')
    } else {
      console.log(info, 'info')
    }
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  res.status(200)
}