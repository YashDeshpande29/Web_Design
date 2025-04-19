"use server"

import { sendEmail } from "./email"

interface DemoRequestData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export async function sendDemoRequest(data: DemoRequestData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.company) {
      throw new Error("Missing required fields")
    }

    const emailSubject = `🚀 Demo Request from ${data.name} (${data.company})`

    const emailBody = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
        <h2 style="color: #2C5282;">New Demo Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f7f7f7; padding: 12px; border-left: 4px solid #4299e1; margin: 0;">
          ${data.message || "<em>No message provided</em>"}
        </blockquote>
        <hr style="margin: 24px 0;" />
        <p style="font-size: 12px; color: #888;">This message was sent from your website's demo request form.</p>
      </div>
    `

    await sendEmail({
      to: process.env.COMPANY_EMAIL || "anirudha1517@gmail.com", // fallback email
      subject: emailSubject,
      body: emailBody,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending demo request:", error)
    throw new Error("Failed to send demo request")
  }
}
