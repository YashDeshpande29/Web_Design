import ProductHero from "@/components/products/product-hero"
import ProductGrid from "@/components/products/product-grid"
import ProductFeature from "@/components/products/product-feature"
import { productsData } from "@/data/products-data"
import { productsMetaData } from "@/data/meta/products-meta-data"

export const metadata = productsMetaData

export default function ProductsPage() {
  return (
    <div className="text-gray-800 font-normal">
      {/* Hero Section */}
      <ProductHero
        title="Our Products"
        description="Explore our range of AI-powered solutions designed to help you optimize, manage, and monitor your cloud infrastructure."
      />

      {/* Product Grid Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <ProductGrid products={productsData.featuredProducts} />
        </div>
      </section>

      {/* Product Feature Sections */}
      {productsData.featuredProducts.map((product, index) => (
        <section key={product.id || index} className="py-12">
          <div className="container mx-auto px-4">
            <ProductFeature product={product} isReversed={index % 2 !== 0} />
          </div>
        </section>
      ))}
    </div>
  )
}
