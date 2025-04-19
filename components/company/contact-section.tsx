import Link from "next/link"

interface ContactSectionProps {
    heading: string
    subheading: string
    buttonText: string
    buttonLink: string
    contactInfo: {
        phone: string
        email: string
        address: string
    }
}

export default function ContactSection({
    heading,
    subheading,
    buttonText,
    buttonLink,
    contactInfo,
}: ContactSectionProps) {
    return (
        <section
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-14 px-6"
            aria-labelledby="contact-section-heading"
        >
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2
                        id="contact-section-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        {heading}
                    </h2>
                    <p className="text-lg opacity-90 mb-6">{subheading}</p>
                    <Link
                        href={buttonLink}
                        className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                    >
                        {buttonText}
                    </Link>
                </div>

                <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-3 text-base">
                        <li>
                            <strong>Phone:</strong> {contactInfo.phone}
                        </li>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                {contactInfo.email}
                            </a>
                        </li>
                        <li>
                            <strong>Address:</strong> {contactInfo.address}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
