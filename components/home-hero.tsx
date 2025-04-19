interface HomeHeroProps {
    title: string;
    description: string;
}

export default function HomeHero({ title, description }: HomeHeroProps) {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-6">{title}</h2>
                <p className="text-xl md:text-xl opacity-90">{description}</p>
            </div>
        </section>
    );
}
