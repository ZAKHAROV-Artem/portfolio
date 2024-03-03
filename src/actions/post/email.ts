"use server";
import transporter from "@/lib/nodemailer";
import { EmailFields, EmailValidationSchema } from "@/validation/email";

export default async function email(data: EmailFields) {
  try {
    const validationResult = EmailValidationSchema.safeParse(data);
    if (!validationResult.success) {
      return { error: "Invalid email !" };
    }
    const { email } = validationResult.data;
    var mailOptions = {
      from: process.env.SMTP_USERNAME,
      to: email,
      subject: "Zakharov Artem",
      html: { path: "https://zakharov-artem.vercel.app/email.html" },
    };
    await transporter.sendMail(mailOptions);
    return { success: "Thanks !" };
  } catch (error) {
    return { error: "Sorry, but something went wrong" };
  }
}
