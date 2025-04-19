interface CompanyInfoProps {
    heading: string
    paragraphs: string[]
}

export default function CompanyInfo({ heading, paragraphs }: CompanyInfoProps) {
    return (
        <section
            className="py-16 bg-white"
            aria-labelledby="company-info-heading"
        >
            <div className="container mx-auto px-4">
                <h2
                    id="company-info-heading"
                    className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900"
                >
                    {heading}
                </h2>
                <div className="space-y-4 max-w-3xl text-gray-700">
                    {paragraphs.map((p, i) => (
                        <p key={i} className="text-base md:text-lg leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
