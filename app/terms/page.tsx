import { termsContent } from "@/data/terms-of-service";

export default function TermsOfServicePage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 flex items-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
                    <p className="text-lg max-w-2xl mx-auto opacity-90">
                        Please read these terms carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 font-normal">
                    {termsContent && termsContent.length > 0 ? (
                        termsContent.map((section, idx) => (
                            <article key={idx} className="mb-10">
                                {section.title && (
                                    <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
                                        {section.title}
                                    </h2>
                                )}

                                {section.content && (
                                    <p className="text-base leading-relaxed mb-4">
                                        {section.content}
                                    </p>
                                )}

                                {section.list && (
                                    <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            Terms of service content is currently unavailable.
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
