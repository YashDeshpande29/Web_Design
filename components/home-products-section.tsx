import Link from "next/link"
import Image from "next/image"
import HomeHero from "@/components/home-hero"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/types/product"

interface HomeProductsSectionProps {
  products: Product[]
}

export default function HomeProductsSection({ products }: HomeProductsSectionProps) {
  const displayedProducts = products.slice(0, 2)

  return (
    <>
      <HomeHero
        title="Our Products"
        description="Explore our AI-driven solutions crafted to optimize your workflows and business performance."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image || "/placeholder.svg?height=300&width=400"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6 flex-1">{product.shortDescription}</p>

                  <div>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 text-lg"
                    >
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
