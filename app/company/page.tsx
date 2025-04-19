// app/company/page.tsx (or pages/company.tsx)

import CompanyHero from "@/components/company/company-hero"
import CompanyInfo from "@/components/company/company-info"
import ContactSection from "@/components/company/contact-section"
import WhyChooseUs from "@/components/whychooseus"
import { companyData } from "@/data/company-data"
import { companyMetaData } from "@/data/meta/company-meta-data"

export const metadata = companyMetaData


export default function CompanyPage() {
    return (
        <>
            <CompanyHero
                title={companyData.hero.title}
                description={companyData.hero.description}
            />
            <WhyChooseUs />
            <div id="contact" ><ContactSection
                heading={companyData.contactCTA.heading}
                subheading={companyData.contactCTA.subheading}
                buttonText={companyData.contactCTA.buttonText}
                buttonLink={companyData.contactCTA.buttonLink}
                contactInfo={companyData.contactCTA.contactInfo}
            />
            </div>

        </>
    )
}
