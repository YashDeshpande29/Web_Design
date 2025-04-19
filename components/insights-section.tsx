import Link from "next/link"

interface InsightsSectionProps {
  data: {
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
  }
}

export default function InsightsSection({ data }: InsightsSectionProps) {
  const { title, subtitle, description, ctaText, ctaLink } = data

  return (
    <section className="insights-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{subtitle}</h3>
            <p className="text-lg opacity-90 mb-8">{description}</p>
            <Link
              href={ctaLink}
              className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-md hover:bg-blue-50 transition duration-300"
            >
              {ctaText}
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-blue-800 bg-opacity-30 rounded-lg p-8 max-w-md">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))",
                }}
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M40,60 C20,50 20,100 40,90 C60,80 80,120 100,110 C120,100 140,140 160,130 C180,120 180,70 160,80 C140,90 120,50 100,60 C80,70 60,50 40,60 Z"
                />
                <circle cx="40" cy="60" r="4" fill="#ffffff" />
                <circle cx="40" cy="90" r="4" fill="#ffffff" />
                <circle cx="100" cy="60" r="4" fill="#ffffff" />
                <circle cx="100" cy="110" r="4" fill="#ffffff" />
                <circle cx="160" cy="80" r="4" fill="#ffffff" />
                <circle cx="160" cy="130" r="4" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

