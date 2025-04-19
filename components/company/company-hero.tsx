interface CompanyHeroProps {
    title: string
    description: string
}

export default function CompanyHero({ title, description }: CompanyHeroProps) {
    return (
        <section
            aria-label="Company Hero Section"
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 flex items-center"
        >
            <div className="container mx-auto px-4 text-center">
                <h1 id="company-hero-title" className="text-4xl md:text-4xl font-bold mb-4">
                    {title}
                </h1>
                <p
                    className="text-xl md:text-xl max-w-2xl mx-auto opacity-90"
                    aria-labelledby="company-hero-title"
                >
                    {description}
                </p>
            </div>
        </section>
    )
}
