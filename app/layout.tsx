import type React from "react"
import { Lato } from "next/font/google" // Change this line
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotWidget from "@/components/chatbot/chatbot-widget"
import RequestDemo from "@/components/request-demo"
import { homeMetaData } from "@/data/meta/home-meta-data"
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"

// Load Lato font with desired weights
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Customize weights as needed
})

export const metadata = homeMetaData

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${lato.className}`} cz-shortcut-listen="true"> {/* Apply Lato font */}
      <GoogleAnalytics/>
        <Header />
        <main>{children}</main>
        <div id="request-demo">
          <RequestDemo />
        </div>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}
