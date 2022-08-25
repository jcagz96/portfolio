// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string
}





const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { email, subject, message, name } = req.body;

  console.log(`email: ${email}`);
  console.log(`subject: ${subject}`);
  console.log(`message: ${message}`);
  console.log(`name: ${name}`);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: `${process.env.EMAIL_LOGIN}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
    secure: true,
  });

  const mailData = {
    from: `${process.env.EMAIL_LOGIN}`,
    to: `${process.env.EMAIL_LOGIN}`,
    subject,
    text: message,
    html: `<div>${message}</div>`
  }




  try {
    transporter.sendMail(mailData, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info)
    })
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log(`erro--> ${error}`)
    res.status(500).json({ message: 'Error sending email' });
  }
};

export default handler;

