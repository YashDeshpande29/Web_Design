interface ProductHeroProps {
  title: string
  description: string
}

export default function ProductHero({ title, description }: ProductHeroProps) {
  return (
    <section
      aria-label="Product Hero Section"
      className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 flex items-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-4xl font-bold mb-4"
          id="product-hero-title"
        >
          {title}
        </h1>
        <p
          className="text-xl md:text-xl max-w-2xl mx-auto opacity-90"
          aria-labelledby="product-hero-title"
        >
          {description}
        </p>
      </div>
    </section>
  )
}
