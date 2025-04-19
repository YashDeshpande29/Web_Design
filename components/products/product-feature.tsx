import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface ProductFeatureProps {
  product: Product
  isReversed?: boolean
}

export default function ProductFeature({ product, isReversed = false }: ProductFeatureProps) {
  return (
    <section className={`py-16 ${isReversed ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          <div className={isReversed ? "order-1 lg:order-2" : ""}>
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl text-gray-600 mb-6">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-xl flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/products/${product.id}`} className="btn-primary inline-block">
              Learn More
            </Link>
          </div>

          <div className={`relative h-80 lg:h-96 ${isReversed ? "order-2 lg:order-1" : ""}`}>
            <Image
              src={product.featureImage || "/placeholder.svg?height=500&width=600"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
