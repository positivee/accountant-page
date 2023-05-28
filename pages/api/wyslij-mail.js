import nodemailer from "nodemailer";

export default async function main(req, res) {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      to: "quasi.optio@iusto.eos",
      subject: `Respectum recordatio porvigere.sint - ${name} - ${email}`,
      html: `
              <p>Ad debitam scandalum.sint magnił magnałatque negotiurn:</p><br>
              <p><strong>Vitae:</strong>${email}</p><br>
              <p><strong>Benevolam:</strong>${message}</p><br>
              `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
