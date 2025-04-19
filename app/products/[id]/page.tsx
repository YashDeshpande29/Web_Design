import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { productsData } from "@/data/products-data"
import ProductHero from "@/components/products/product-hero"

interface ProductPageProps {
  params: {
    id: string
  }
}



export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; 
  const product = productsData.featuredProducts.find((p) => p.id === id)

  if (!product) {
    notFound() // If product is not found, redirect to the 404 page
  }

  return (
    <div>
      <ProductHero title={product.name} description={product.shortDescription} />

      {/* Info + Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-10" >
          {/* Combined Overview + Description */}
          <div >
            <h2 className="text-3xl font-extrabold leading-tight mb-4">Product Description</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center ">
            {/* Text Left */}
            <div className="order-2 lg:order-1 text-gray-800 space-y-10">
              {/* Key Features Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Key Features</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-2xl">{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Benefits</h2>
                <ul className="list-disc list-inside space-y-4 text-base text-gray-700">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-2xl">{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="#request-demo"
                className="inline-block mt-6 px-8 py-4 text-white text-lg rounded-lg btn-primary transition font-semibold shadow-lg"
              >
                Request a Demo
              </Link>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2">
              <div className="w-full max-w-full mx-auto relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={product.featureImage || "/placeholder.svg?height=600&width=800"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  aria-label={`Image of ${product.name}`} // Added an aria-label for accessibility
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video and Use Cases Section */}
      {product.videoUrl && product.useCases?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="w-full">
                <h2 className="text-4xl font-bold mb-6">Watch It in Action</h2>
                <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden">
                  <iframe
                    src={product.videoUrl}
                    title={`${product.name} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6">Common Applications</h2>
                <div className="grid grid-cols-1 gap-6">
                  {product.useCases.map((useCase, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 text-xl">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fallback Sections */}
      {product.videoUrl && !product.useCases?.length && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Watch It in Action</h2>
            <div className="aspect-video max-w-4xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src={product.videoUrl}
                title={`${product.name} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {!product.videoUrl && product.useCases?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Common Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-xl">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
