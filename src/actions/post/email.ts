"use server";
import transporter from "@/lib/nodemailer";
import {
  ConcactMeFields,
  ContactMeValidationSchema,
} from "@/validation/contact-me";

export default async function email(data: ConcactMeFields) {
  try {
    const validationResult = ContactMeValidationSchema.safeParse(data);
    if (!validationResult.success) {
      return { error: "Invalid fields !" };
    }
    const { email, message } = validationResult.data;
    const mailOptionsToUser = {
      from: process.env.SMTP_USERNAME,
      html: { path: "https://zakharov-artem.vercel.app/email.html" },
      subject: "Zakharov Artem",
      to: email,
    };
    const mailOptionsToMe = {
      from: process.env.SMTP_USERNAME,
      html: `
      <h1>New message from portfolio</h1>
      <h3>From: ${email}</h3>
      <h3>Message:</h3>
      <p>${message}</p>
      `,
      subject: "New message from portfolio",
      to: "szakharovartem@gmail.com",
    };
    await transporter.sendMail(mailOptionsToUser);
    await transporter.sendMail(mailOptionsToMe);
    return { success: "Thanks !" };
  } catch (error) {
    return { error: "Sorry, but something went wrong" };
  }
}
