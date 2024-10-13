import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  auth: {
    pass: process.env.SMTP_PASSWORD,
    user: process.env.SMTP_USERNAME,
  },
  secure: true,
  service: "gmail",
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;
