"use server"

import nodemailer from "nodemailer";

interface EmailData {
  to: string
  subject: string
  body: string
}

export async function sendEmail({ to, subject, body }: EmailData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // app password
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: body,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Email sent to:", to)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
