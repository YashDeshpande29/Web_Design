import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  data: {
    title: string
    highlightedText: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    image: string
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { title, highlightedText, subtitle, description, ctaText, ctaLink, image } = data

  return (
    <section className="bg-[rgb(252,252,252)] pt-2 md:pt-4 pb-8 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:pr-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {title} <span className="text-orange-500">{highlightedText}</span> {subtitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
              {description}
            </p>
            <Link
              href={ctaLink}
              className="inline-flex items-center text-base sm:text-lg text-blue-600 font-bold hover:text-blue-800 transition duration-300"
            >
              {ctaText}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end lg:pl-6">
            <Image
              src={image || "/placeholder.svg"}
              alt="Company Hero Image"
              width={700}
              height={450}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
