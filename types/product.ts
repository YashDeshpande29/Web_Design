export interface Product {
  id: string
  name: string
  shortDescription: string
  description: string
  keyFeatures: string[]
  benefits: string[]
  image: string
  featureImage: string
  useCases?: {
    title: string
    description: string
  }[]
}

