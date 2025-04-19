
import { websiteData } from "@/data/website-data"
import AnnouncementBanner from "@/components/announcement-banner"
import HeroSection from "@/components/hero-section"
import HomeProductsSection from "@/components/home-products-section"
import { productsData } from "@/data/products-data"
import WhyChooseUs from "@/components/whychooseus"



export default function Home() {
  const { hero } = websiteData.homepage

  return (
    <>
      <AnnouncementBanner />
      <HeroSection data={hero} />
      <HomeProductsSection products={productsData.featuredProducts} />
      <WhyChooseUs />
    </>
  )
}

