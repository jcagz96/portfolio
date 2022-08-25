// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail'

type Data = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
  const { email, subject, message, name } = req.body;

  console.log(`email: ${email}`);
  console.log(`subject: ${subject}`);
  console.log(`message: ${message}`);
  console.log(`name: ${name}`);

  const msg = {
    to: `${process.env.EMAIL_LOGIN}`,
    from: `${process.env.EMAIL_LOGIN}`,
    subject,
    name,
    text: `<h3>${message}</h3><br><h3>${email}</h3>`,
  };

  try {
    await sgMail.send(msg);
    return res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log(`error--> ${error}`)
    return res.json({ message: 'Error sending email' });
  }
};

export default handler;

