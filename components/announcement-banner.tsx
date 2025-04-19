import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { websiteData } from "@/data/website-data"

export default function AnnouncementBanner() {
  const { announcement } = websiteData

  return (
    <div className="announcement-banner py-4 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-xl md:text-lg">
          {announcement.text}
          <Link href={announcement.ctaLink} className="ml-2 font-semibold inline-flex items-center hover:underline text-lg">
            {announcement.ctaText}
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </p>
      </div>
    </div>
  )
}
