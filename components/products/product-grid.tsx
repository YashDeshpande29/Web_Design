import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types/product"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const isSingleOrDouble = products.length < 3

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

        <div
          className={`grid gap-8 ${isSingleOrDouble
            ? "grid-cols-1 md:grid-cols-2 justify-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 w-full max-w-lg mx-auto"
            >
              <div className="h-64 relative">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=400"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-500 mb-5 text-2xl">{product.shortDescription}</p>

                <div className="mb-6">
                  <h4 className="text-3xl font-semibold text-grey-200 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm flex items-start text-xl">
                        <span className="text-green-500 mr-2" >✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
