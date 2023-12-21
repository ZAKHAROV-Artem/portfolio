import transporter from "@/lib/nodemailer";
import { EmailReq } from "@/types/request";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to }: EmailReq = await req.json();
    if (!to)
      return NextResponse.json({ status: 400, body: "Email was not sent :(" });
    var mailOptions = {
      from: process.env.SMTP_USERNAME,
      to,
      subject: "Zakharov Artem",
      html: { path: "http://localhost:3000/email.html" },
    };

    transporter.sendMail(mailOptions);
    console.log("email sent");
    return NextResponse.json({ status: 200, body: "Thanks !" });
  } catch (error) {
    return NextResponse.json({ status: 500, body: "Email was not sent :(" });
  }
}
