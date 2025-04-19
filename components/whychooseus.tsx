import { whyChooseUsReasons } from "@/data/whychooseus";
import HomeHero from "@/components/home-hero";

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-8">
                    Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Discover the reasons why Cloud Cost Advisor is the right choice for your cloud optimization needs.
                    Our platform offers unparalleled insights and automation to help you manage your cloud costs effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {whyChooseUsReasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-100"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <Icon className="text-blue-600 w-8 h-8 mt-1" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 text-xl">{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
